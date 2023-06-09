import { Capsule } from "@/modules/capsules/interfaces/capsule.interface";
import { useCapsulesServices } from "@/modules/capsules/services";
import { useEffect, useState } from "react";

export function useHome() {
  const { getAllCapsules } = useCapsulesServices();

  const [capsules, setCapsules] = useState<Array<Capsule>>([]);

  useEffect(() => {
    getAllCapsules().then((cap) => {
      setCapsules(cap);
    });
  }, []);

  return { capsules };
}
