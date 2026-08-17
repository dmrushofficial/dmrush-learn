import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Course } from "@/content/courses";
import { cn } from "@/lib/cn";

export function CourseCard({
  course,
  featured = false,
}: {
  course: Course;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-md",
        featured && "md:col-span-2 md:grid md:grid-cols-2",
      )}
    >
      <div className={cn("relative overflow-hidden bg-panel", featured ? "min-h-56" : "aspect-[16/10]")}>
        <Image
          src={course.thumbnail}
          alt={`${course.title} course cover`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          <Badge tone="accent">{course.category}</Badge>
          <Badge>{course.level}</Badge>
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-[-0.02em] text-ink">
          <Link href={`/courses/${course.slug}`} className="hover:text-accent">
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{course.shortDescription}</p>
        <p className="mt-3 text-xs font-semibold text-ink">Instructor: {course.instructor}</p>
        <div className="mt-5">
          <Button href={`/courses/${course.slug}`} variant="secondary" size="sm">
            View course →
          </Button>
        </div>
      </div>
    </article>
  );
}
