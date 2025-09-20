"use client";

import { getSingleProductApi } from "@/api/product";
import { useQuery } from "@tanstack/react-query";

interface Props {
  id: string;
}

export function ProductClient({ id }: Props) {
  const { data } = useQuery({
    queryKey: [`product-${id}`],
    queryFn: () => getSingleProductApi({ id }),
  });
  const product = data?.data.attributes;
  console.log(product);

  return <div>product id is {id}</div>;
}
