import { LoaderPage } from "@/app/components";
import { ROUTES } from "@/app/constants/ROUTES";
import { AppLayout } from "@/containers/layout/components";
import {
  CapsuleImages,
  ImageCover,
} from "@/containers/view_capsule/components";
import { Capsule } from "@/modules/capsules/interfaces/capsule.interface";
import { useCapsulesServices } from "@/modules/capsules/services";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function CollcetionView() {
  const router = useRouter();
  const { capsuleID } = router.query;
  const { findCapsuleById } = useCapsulesServices();
  const [loading, setLoading] = useState(true);
  const [capsule, setCapsule] = useState<Capsule | null>(null);

  useEffect(() => {
    if (capsuleID) {
      if (Number.isInteger(Number(capsuleID))) {
        findCapsuleById(Number(capsuleID))
          .then((c) => setCapsule(c))
          .catch((e) => router.push(ROUTES.NOT_FOUND))
          .finally(() => setLoading(false));
      } else {
        router.push(ROUTES.NOT_FOUND);
      }
    }
  }, [capsuleID, router]);

  return (
    <AppLayout title="Capsule View" description="Capsule View">
      <LoaderPage loading={loading}>
        {capsule && (
          <React.Fragment>
            <ImageCover capsule={capsule} />
            <CapsuleImages images={capsule.images} />
          </React.Fragment>
        )}
      </LoaderPage>
    </AppLayout>
  );
}
