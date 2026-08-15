import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Course } from "@/content/courses";

export function CourseFinalCta({ course }: { course: Course }) {
  return (
    <section className="bg-accent py-12 md:py-14">
      <Container className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-[-0.03em] text-on-accent md:text-3xl">
          Ready to Build Your Digital Skills?
        </h2>
        <p className="mt-3 text-sm leading-7 text-on-accent/80 md:text-base">
          Join practical, project-based training at DMRUSH Pattoki.
        </p>
        <div className="mt-7">
          <Button href={`/contact?course=${course.slug}`} variant="signal" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
