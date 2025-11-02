"use client";

import { getProductsApi } from "@/api/product";
import { IconBox, Portal } from "@/components";
import { Entity, ProductFilters, ProductType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useDebounce } from "use-debounce";
import { SearchItem } from "../searchForm";
import { SearchModal } from "./searchModal";
import { useMediaQuery } from "react-responsive";
import PendingDots from "@/components/shared/ui/indicators/pendingDots";
import { MobileSearchItem } from "./mobileSearchItem";

interface formInputs {
  searchText: string;
}

interface Props {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export function MobileSearchForm({ isExpanded = false, setIsExpanded }: Props) {
  const [resultData, setResultData] = useState<Array<Entity<ProductType>>>([]);
  const [isFocused, setIsFocused] = useState(false);
  const { register, handleSubmit, watch } = useForm<formInputs>();

  const isDisplayLarge = useMediaQuery({ query: "(min-width: 48rem)" });

  const closeModal = useCallback(() => setIsExpanded(false), [setIsExpanded]);

  useEffect(() => {
    if (isDisplayLarge) {
      closeModal();
    }
  }, [isDisplayLarge, closeModal]);

  const { mutate: mutateSearch, isPending } = useMutation({
    mutationFn: (data: ProductFilters) =>
      getProductsApi({ filters: data, populate: ["thumbnail"] }),
  });

  const searchText = watch("searchText");
  const [debouncedSearchText] = useDebounce(searchText, 300);
  const searchByText = useCallback((text: string) => {
    mutateSearch(
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
    if (data.searchText.length >= 1) {
      searchByText(data.searchText);
    }
  }

  const content = (
    <div className="relative ml-auto w-full lg:max-w-[400px] xl:max-w-[700px]">
      <form className="relative flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`w-full rounded-sm border-[1px] px-6 py-3.5 font-montserrat text-[#B6B6B6]`}
          type="text"
          id="search-bar"
          placeholder="Search for items"
          autoComplete="off"
          onFocus={() => setIsFocused(true)}
          {...register("searchText", {
            onBlur: () => setTimeout(() => setIsFocused(false), 400),
          })}
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
      {isPending && (
        <div className="mx-auto mt-5 w-fit">
          <PendingDots />
        </div>
      )}
      {isFocused && resultData.length > 0 && (
        <div className="absolute top-14 right-0 left-0 z-2 w-full overflow-auto rounded-xl bg-white p-2.5">
          <ul>
            {resultData.map((item, index) => (
              <li key={index} className="border-b border-gray-300 p-2">
                {<MobileSearchItem data={item} closeModal={closeModal} />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  {
    return isExpanded ? (
      <Portal>
        <SearchModal onClose={closeModal}>{content}</SearchModal>
      </Portal>
    ) : null;
  }
}
