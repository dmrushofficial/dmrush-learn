import Image from "next/image";
import type { Instructor } from "@/content/instructors";
import { cn } from "@/lib/cn";

export function InstructorCard({
  person,
  className,
}: {
  person: Instructor;
  className?: string;
}) {
  return (
    <li className={cn("rounded-2xl border border-line bg-surface p-6", className)}>
      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-line bg-panel">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          className="object-cover object-top"
          sizes="80px"
        />
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink">{person.name}</h3>
      <p className="mt-1 text-sm font-semibold text-accent">{person.role}</p>
      <p className="mt-4 text-sm text-muted">{person.coursesTaught.join(" · ")}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.1em] text-muted">{person.expertise}</p>
    </li>
  );
}
