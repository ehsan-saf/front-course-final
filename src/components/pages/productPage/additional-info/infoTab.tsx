interface Props {
  data?: string | null;
}

export function InfoTab({ data }: Props) {
  return (
    <p className="text-body">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
      facilis? Beatae fuga aliquam architecto voluptatibus, quod voluptas totam
      porro quasi, deleniti nulla ullam tempore corrupti error voluptate et id
      quae?
    </p>
  );
}
