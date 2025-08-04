import { ArrowDown, ArrowUp } from "lucide-react";
import { ReactNode, useState } from "react";

interface Props {
  title: string | ReactNode;
  children: ReactNode;
  isAbsolutePos?: boolean;
  className?: string;
}

export function Accordion({
  title,
  children,
  className = "",
  isAbsolutePos = false,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`accordion border-b-[1px] border-border lg:border-0 ${className}`}
    >
      <div className={`accordion-item relative ${expanded ? "expanded" : ""}`}>
        <h2 className="accordion-header">
          <button
            className="accordion-button flex gap-2 w-full text-left lg:pointer-events-none"
            onClick={() => setExpanded((stat) => !stat)}
          >
            <span>{title}</span>
            {expanded ? <ArrowUp /> : <ArrowDown />}
          </button>
        </h2>
        <div
          className={`accordion-collapse ${
            isAbsolutePos ? "absolute z-2" : ""
          } mt-7 lg:grid-rows-1!`}
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
