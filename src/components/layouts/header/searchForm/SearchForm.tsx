import { getProductsApi } from "@/api/product";
import { IconBox } from "@/components";
import { Entity, ProductFilters, ProductType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { SearchItem } from "./searchItem";
import { useDebounce } from "use-debounce";

interface formInputs {
  searchText: string;
}

export function SearchForm({ containerClass }: { containerClass?: string }) {
  const [resultData, setResultData] = useState<Array<Entity<ProductType>>>([]);
  const { register, handleSubmit, watch } = useForm<formInputs>();

  const mutation = useMutation({
    mutationFn: (data: ProductFilters) =>
      getProductsApi({ filters: data, populate: ["thumbnail"] }),
  });

  const searchText = watch("searchText");
  const [debouncedSearchText] = useDebounce(searchText, 400);
  const searchByText = useCallback((text: string) => {
    mutation.mutate(
      { title: { $containsi: text } },
      {
        onSuccess: (response) => {
          setResultData(response.data);
        },
      },
    );
  }, []);

  useEffect(() => {
    if (debouncedSearchText && debouncedSearchText.trim().length >= 2) {
      searchByText(debouncedSearchText);
    } else {
      setResultData([]);
    }
  }, [debouncedSearchText, searchByText]);

  function onSubmit(data: formInputs) {
    searchByText(data.searchText);
  }

  return (
    <div
      className={twMerge(
        "relative ml-auto w-full lg:max-w-[400px] xl:max-w-[700px]",
        containerClass,
      )}
    >
      <form className="relative flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`w-full rounded-sm border-[1px] border-greenBorder px-6 py-3.5 font-montserrat text-[#B6B6B6]`}
          type="text"
          id="search-bar"
          placeholder="Search for items"
          autoComplete="off"
          {...register("searchText")}
        />
        <button
          type="submit"
          className="absolute top-1/2 right-3.5 -translate-x-full -translate-y-1/2 cursor-pointer pt-1"
        >
          <IconBox
            icon="search"
            size={{ mobile: 20, nonMobile: 20 }}
            className="text-body"
          />
        </button>
      </form>
      {resultData && (
        <div className="absolute top-14 right-0 left-0 z-2 w-full rounded-xl bg-white p-2.5">
          <ul>
            {resultData.map((item, index) => (
              <li key={index}>{<SearchItem data={item} />}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
