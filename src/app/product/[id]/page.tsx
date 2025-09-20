interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  return <div>The product id is {params.id}</div>;
}
