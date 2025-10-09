import { CheckBox } from "@/components";
import { produce } from "immer";
import { useState } from "react";

interface Props {
  listItems: Array<{ id: number; name: string; isChecked: boolean }>;
}

export function CheckList({ listItems }: Props) {
  const [items, setItems] =
    useState<Array<{ id: number; name: string; isChecked: boolean }>>(
      listItems,
    );

  const changeHandler = (id: number) => {
    setItems(
      produce((draft) => {
        const item = draft.find((item) => item.id === id);
        if (item) item.isChecked = !item?.isChecked;
      }),
    );
    console.log(items);
  };

  return (
    <div>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <CheckBox
                name={item.name}
                isChecked={item.isChecked}
                changeChecked={() => changeHandler(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
