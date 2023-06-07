import { CreateCapsuleDTO } from "@/modules/capsules/dto/CreateCapsule.dto";
import {
  EmptyDescriptionError,
  EmptyTitleError,
  NoImagesError,
  NotImageCoverError,
} from "@/modules/capsules/exceptions";
import { useCapsulesServices } from "@/modules/capsules/services";
import { ChangeEvent, useRef, useState } from "react";
import { toast } from "react-hot-toast";

export function useAddCapsule() {
  const { createCapsule } = useCapsulesServices();
  const [capsuleForm, setCapsuleForm] = useState<CreateCapsuleDTO>({
    description: "",
    imageCover: -1,
    images: [],
    title: "",
  });

  const imageInputRef = useRef<HTMLInputElement>(null);

  function handleSelectImages() {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }

  function handleChangeCapsuleTitle(newTitle: string): void {
    setCapsuleForm({ ...capsuleForm, title: newTitle });
  }

  function handleChangeCapsuleDescription(newDescription: string): void {
    setCapsuleForm({ ...capsuleForm, description: newDescription });
  }

  function handleDeleteImage(imageIndex: number) {
    const actualImages = [] as Array<File>;
    for (let i = 0; i < capsuleForm.images.length; i++) {
      if (i !== imageIndex) {
        actualImages.push(capsuleForm.images[i]);
      }
    }

    setCapsuleForm({
      ...capsuleForm,
      images: actualImages,
      imageCover:
        capsuleForm.imageCover === imageIndex ? -1 : capsuleForm.imageCover,
    });
  }

  function handleChangeImages(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    const allImages = [] as Array<File>;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const image = files.item(i);

        if (image) {
          allImages.push(image);
        }
      }
    }

    setCapsuleForm({
      ...capsuleForm,
      images: [...capsuleForm.images, ...allImages],
    });
  }

  function handleSelectImageCover(imageIndex: number): void {
    setCapsuleForm({ ...capsuleForm, imageCover: imageIndex });
  }

  async function handleSubmit() {
    try {
      await createCapsule(capsuleForm);
      toast.success("Cápsula creada con éxito.");
    } catch (error) {
      if (error instanceof NoImagesError) {
        toast.error("Debes insertar al menos una imagen");
      } else if (error instanceof NotImageCoverError) {
        toast.error(
          "Debes seleccionar al menos una imagen para que sea portada."
        );
      } else if (error instanceof EmptyDescriptionError) {
        toast.error("No se puede dejar la descripción de la cápsula vacía.");
      } else if (error instanceof EmptyTitleError) {
        toast.error("No se puede dejar el título de la cápsula vací0.");
      } else {
        console.log(error);
        toast.error("Hubo un error");
      }
    }
  }

  return {
    capsuleForm,
    handleSelectImages,
    imageInputRef,
    handleChangeImages,
    handleSelectImageCover,
    handleChangeCapsuleDescription,
    handleChangeCapsuleTitle,
    handleDeleteImage,
    handleSubmit,
  };
}
