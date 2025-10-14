import { Pagination } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { IconBox } from "../iconBox";

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  pagination: Pagination;
  nextPage: () => void;
  prevPage: () => void;
}

export function PaginationButtons({
  pagination,
  page,
  setPage,
  nextPage,
  prevPage,
}: Props) {
  if (pagination?.pageCount <= 1) return null;

  return (
    <div className="flex items-center gap-2.5">
      <button
        onClick={prevPage}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-grey-1 lg:h-10 lg:w-10"
      >
        <IconBox icon="arrow-left" className="text-body" />
      </button>
      {pagination &&
        Array.from({ length: pagination.pageCount }, (_, i) => i + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`flex h-7 w-7 items-center justify-center rounded-full lg:h-10 lg:w-10 ${
                page === pageNum
                  ? "bg-brand-1 text-white"
                  : "bg-grey-1 text-body"
              }`}
            >
              {pageNum}
            </button>
          ),
        )}
      <button
        onClick={nextPage}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-1 lg:h-10 lg:w-10"
      >
        <IconBox icon="arrow-right" className="text-white" />
      </button>
    </div>
  );
}
