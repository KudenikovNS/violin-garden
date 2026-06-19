type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageLoader({ src }: LoaderProps): string {
  return `/violin-garden${src}`;
}
