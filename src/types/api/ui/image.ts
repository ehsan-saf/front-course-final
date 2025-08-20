export interface ImageType {
  name: string;
  alternativeText: string | null;
  caption: string;
  width: number;
  height: number;
  formats: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string | null;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string;
}
