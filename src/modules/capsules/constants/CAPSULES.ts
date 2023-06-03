import { Capsule } from "../interfaces/capsule.interface";

export const CAPSULES: Array<Capsule> = new Array(5)
  .fill(0)
  .map(() => ({ title: "Capsule 1", image: "/images/test.png" }));
