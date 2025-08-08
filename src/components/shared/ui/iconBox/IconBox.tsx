import Link from "next/link";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { twMerge } from "tailwind-merge";

interface Props {
  icon: IconName;
  size?: { mobile: number; nonMobile: number };
  color?: string;
  link?: string;
  title?: string;
  hideTitleOnMobile?: boolean;
  badge?: string | number;
  className?: string;
}

export function IconBox({
  icon,
  size = { mobile: 24, nonMobile: 24 },
  color,
  link,
  title,
  hideTitleOnMobile = false,
  badge,
  className = "",
}: Props) {
  const content = (
    <div className={twMerge("flex items-center gap-1", className)}>
      <div className="relative">
        <DynamicIcon
          name={icon}
          color={color}
          size={size.nonMobile}
          className="w-[var(--mobile-size)] md:w-[var(--non-mobile-size)]"
          style={
            {
              "--mobile-size": `${size.mobile}px`,
              "--non-mobile-size": `${size.nonMobile}px`,
            } as React.CSSProperties
          }
        />
        {badge && (
          <span className="absolute top-0 right-0 grid h-5 w-5 translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-brand-1 p-1.5 text-xs text-white">
            {badge}
          </span>
        )}
      </div>
      {title && (
        <span
          className={`${
            hideTitleOnMobile && "hidden"
          } font-lato text-body lg:inline-block`}
        >
          {title}
        </span>
      )}
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  } else {
    return content;
  }
}
