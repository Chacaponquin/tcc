import { useContext } from "react";
import { CreateCapsuleDTO } from "../dto/CreateCapsule.dto";
import { SupabaseContext } from "@/app/context";
import { v4 as uuid } from "uuid";
import {
  CreateCapsuleError,
  EmptyDescriptionError,
  EmptyTitleError,
  NoImagesError,
  NotImageCoverError,
  UploadImageError,
} from "../exceptions";
import { Capsule, CapsuleImage } from "../interfaces/capsule.interface";
import { ConnectionError } from "@/app/exceptions";

export function useCapsulesServices() {
  const { supabase } = useContext(SupabaseContext);

  async function createCapsule(createCapsuleDTO: CreateCapsuleDTO) {
    if (createCapsuleDTO.images.length === 0) {
      throw new NoImagesError();
    }

    if (
      createCapsuleDTO.imageCover < 0 ||
      createCapsuleDTO.images.length - 1 < createCapsuleDTO.imageCover
    ) {
      throw new NotImageCoverError();
    }

    if (createCapsuleDTO.title === "") {
      throw new EmptyTitleError();
    }

    if (createCapsuleDTO.description === "") {
      throw new EmptyDescriptionError();
    }

    const imagesPaths = [] as Array<string>;
    for (let i = 0; i < createCapsuleDTO.images.length; i++) {
      const { data, error } = await supabase.storage
        .from("capsule_images")
        .upload(`images/${uuid()}.png`, createCapsuleDTO.images[i], {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        throw new UploadImageError();
      } else {
        if (data) {
          const { data: storageData } = supabase.storage
            .from("capsule_images")
            .getPublicUrl(data.path, {});

          if (error) {
            throw new UploadImageError();
          } else {
            imagesPaths.push(storageData.publicUrl);
          }
        } else {
          throw new UploadImageError();
        }
      }
    }

    // insert capsule
    const { error } = await supabase.from("capsule").insert({
      title: createCapsuleDTO.title,
      description: createCapsuleDTO.description,
    });

    if (error) {
      throw new CreateCapsuleError();
    }

    // insert capsule_images
    const lastCapsuleID = await getLastCapsuleID();
    for (let i = 0; i < imagesPaths.length; i++) {
      const { error } = await supabase.from("capsule_image").insert({
        parent_capsule: lastCapsuleID,
        image_url: imagesPaths[i],
        is_cover: i === createCapsuleDTO.imageCover,
      });

      if (error) {
        console.log(lastCapsuleID, error);
        throw new CreateCapsuleError();
      }
    }
  }

  async function getLastCapsuleID(): Promise<number> {
    const allCapsules = (await supabase.from("capsule").select()).data;

    if (allCapsules) {
      return allCapsules[allCapsules.length - 1].id as number;
    } else {
      throw new CreateCapsuleError();
    }
  }

  async function getAllCapsules(): Promise<Array<Capsule>> {
    const capsules = await supabase
      .from("capsule")
      .select("id, title, description, capsule_image(image_url, is_cover, id)");

    if (capsules.error) {
      throw new ConnectionError();
    }

    return capsules.data.map((c) => {
      return {
        id: c.id,
        description: c.description,
        images: c.capsule_image,
        title: c.title,
        image_cover: (c.capsule_image.find((i) => i.is_cover) as CapsuleImage)
          .image_url,
      };
    });
  }

  return { createCapsule, getAllCapsules };
}
