import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** Use white pill background (for dark surfaces) */
  onDark?: boolean;
  className?: string;
  imageClassName?: string;
  href?: string;
};

export function Logo({
  onDark = false,
  className,
  imageClassName = "h-8 w-auto md:h-9",
  href = "/",
}: LogoProps) {
  const content = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center",
        onDark && "rounded-lg bg-white px-2 py-1 shadow-sm",
      )}
    >
      <Image
        src="/images/brand/dmrush-logo.png"
        alt="DM RUSH"
        width={1024}
        height={297}
        className={imageClassName}
        priority
      />
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn("inline-flex shrink-0 items-center", className)}
        aria-label="DM RUSH Learn home"
      >
        {content}
      </Link>
    );
  }

  return <div className={cn("inline-flex shrink-0 items-center", className)}>{content}</div>;
}
