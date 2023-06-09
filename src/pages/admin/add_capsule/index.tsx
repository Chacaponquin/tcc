import {
  ButtonsSection,
  FormSection,
  ImagePicker,
  SelectedImages,
} from "@/containers/add_capsule/components";
import { useAddCapsule } from "@/containers/add_capsule/hooks";
import { AppLayout } from "@/containers/layout/components";
import { AdminRoute } from "@/modules/shared/routes/components";
import React from "react";

export default function AddCapsule() {
  const {
    handleSelectImages,
    imageInputRef,
    handleChangeImages,
    capsuleForm,
    handleSelectImageCover,
    handleChangeCapsuleDescription,
    handleChangeCapsuleTitle,
    handleDeleteImage,
    handleSubmit,
    loading,
  } = useAddCapsule();

  return (
    <AppLayout title="Add Capsule" description="Add Capsule">
      <AdminRoute>
        <div className="py-[85px] w-full min-h-screen flex justify-center items-center px-6 flex-col">
          <div className="shadow-lg px-8 py-5 flex flex-col w-full max-w-[550px] gap-y-3 border-2 border-slate-300 rounded-sm">
            <ImagePicker
              imageInputRef={imageInputRef}
              handleSelectImages={handleSelectImages}
              handleChangeImages={handleChangeImages}
            />
            <SelectedImages
              images={capsuleForm.images}
              imageCover={capsuleForm.imageCover}
              handleSelectImageCover={handleSelectImageCover}
              handleDeleteImage={handleDeleteImage}
            />
            <FormSection
              handleChangeCapsuleDescription={handleChangeCapsuleDescription}
              handleChangeCapsuleTitle={handleChangeCapsuleTitle}
              title={capsuleForm.title}
              description={capsuleForm.description}
            />
            <ButtonsSection handleSubmit={handleSubmit} loading={loading} />
          </div>
        </div>
      </AdminRoute>
    </AppLayout>
  );
}
