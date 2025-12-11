import { CategoryClient } from "../categoryClient";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <CategoryClient id={id} />;
}
