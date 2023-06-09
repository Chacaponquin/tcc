export interface Capsule {
  title: string;
  images: CapsuleImage[];
  id: number;
  description: string;
  image_cover: string;
}

export interface CapsuleImage {
  image_url: string;
  id: number;
  is_cover: boolean;
}
