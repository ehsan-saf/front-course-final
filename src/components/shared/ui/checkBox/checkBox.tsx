import clsx from "clsx";
import { IconBox } from "../iconBox";

interface Props {
  name?: string;
  isChecked: boolean;
  changeChecked: () => void;
}

export function CheckBox({ name, isChecked = false, changeChecked }: Props) {
  const handleChange = () => {
    changeChecked();
  };

  return (
    <div>
      <label className="flex items-center gap-3">
        <div
          className={clsx(
            "flex h-[18px] w-[18px] items-center justify-center rounded-xs border-3 p-2",
            isChecked ? "border-brand-1 bg-brand-1" : "border-grey-1",
          )}
        >
          <IconBox icon="check" className="text-white" />
        </div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="hidden"
        />
        {name && (
          <span
            className={clsx(
              "font-lato select-none",
              isChecked ? "text-heading" : "text-text-muted",
            )}
          >
            {name}
          </span>
        )}
      </label>
    </div>
  );
}
