import { AppLayout } from "@/containers/layout/components";
import {
  CapsuleImages,
  ImageCover,
} from "@/containers/view_capsule/components";

export default function CollcetionView() {
  return (
    <AppLayout title="Capsule View" description="Capsule View">
      <ImageCover />
      <CapsuleImages />
    </AppLayout>
  );
}
