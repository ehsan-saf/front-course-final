"use client";

import { ProductType } from "@/types";
import { useState } from "react";
import clsx from "clsx";
import { DescriptionTab } from "../description-tab";

interface Props {
  product: ProductType;
}

type TabId = "description" | "info" | "reviews";

export function ProductDescription({ product }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("description");

  const tabs: { id: TabId; label: string }[] = [
    { id: "description", label: "Description" },
    { id: "info", label: "Additional Info" },
    { id: "reviews", label: "Reviews (3)" },
  ];

  return (
    <div className="rounded-[30px] border border-grey-1 p-12">
      <div className="flex flex-col">
        <div className="mb-9 flex gap-6">
          {tabs.map((tab, index) => {
            return (
              <button
                key={index}
                className={clsx(
                  "cursor-pointer rounded-[30px] border border-grey-1 px-[30px] py-[15px]",
                  activeTab === tab.id
                    ? "text-brand-1 shadow-md"
                    : "text-text-muted",
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {activeTab === "description" && (
          <DescriptionTab data={product.description} />
        )}
      </div>
    </div>
  );
}
