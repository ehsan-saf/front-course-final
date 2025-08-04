import { useMediaQuery } from "react-responsive";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  title: string | ReactNode;
  children: ReactNode;
  isAbsolutePos?: boolean;
  className?: string;
  expandOnLargeDisplay?: boolean;
}

export function Accordion({
  title,
  children,
  className = "",
  isAbsolutePos = false,
  expandOnLargeDisplay = false,
}: Props) {
  const isDisplayLarge = useMediaQuery({ query: "(min-width: 64rem)" });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expandOnLargeDisplay) {
      if (isDisplayLarge) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    }
  }, [isDisplayLarge, expandOnLargeDisplay]);

  return (
    <div
      className={`accordion border-b-[1px] border-border lg:border-0 ${className}`}
    >
      <div className={`accordion-item relative ${expanded ? "expanded" : ""}`}>
        <h2 className="accordion-header">
          <button
            className="accordion-button flex gap-2 w-full text-left"
            onClick={() => setExpanded((stat) => !stat)}
          >
            <span>{title}</span>
            {!expandOnLargeDisplay ||
              (!isDisplayLarge && (expanded ? <ArrowUp /> : <ArrowDown />))}
          </button>
        </h2>
        <div
          className={`accordion-collapse ${
            isAbsolutePos ? "absolute z-2" : ""
          }`}
        >
          <div className="accordion-body mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
