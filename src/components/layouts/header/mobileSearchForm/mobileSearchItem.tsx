import { ImageView } from "@/components/shared";
import { Entity, ProductType } from "@/types";
import Link from "next/link";

interface Props {
  data: Entity<ProductType>;
  closeModal: () => void;
  resetForm: () => void;
}

export function MobileSearchItem({ data, closeModal, resetForm }: Props) {
  const productLink = `/product/${data.id}`;

  return (
    <Link
      href={productLink}
      onClick={() => {
        resetForm();
        closeModal();
      }}
      className="flex cursor-pointer items-center justify-between hover:bg-gray-100"
    >
      <ImageView
        src={data.attributes.thumbnail?.data?.attributes.url}
        alt={data.attributes.thumbnail?.data?.attributes.alternativeText}
        width={data.attributes.thumbnail?.data?.attributes.width}
        height={data.attributes.thumbnail?.data?.attributes.height}
        wrapperClassName="grid content-center w-[50px] h-[50px]"
        imageClassName="rounded-[6px] w-full"
      />
      <p className="max-w-40 text-center text-xs md:max-w-60">
        {data.attributes.title}
      </p>
    </Link>
  );
}
