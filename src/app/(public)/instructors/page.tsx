import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { InstructorCard } from "@/components/public/InstructorCard";
import { instructors } from "@/content/instructors";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Instructors",
  description:
    "Meet DMrush Learn instructors Najaf Khan, Usman Raza, and Tayyab Hanif.",
  path: "/instructors",
});

export default function InstructorsPage() {
  return (
    <>
      <section className="border-b border-line bg-cream tx-paper">
        <Container className="py-14 lg:py-20">
          <p className="t-label text-accent">Instructors</p>
          <h1 className="t-h2 mt-4 max-w-3xl text-ink">Practitioner-led courses.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Najaf Khan, Usman Raza, and Tayyab Hanif teach the eight DMrush Learn programs
            on campus in Pattoki.
          </p>
        </Container>
      </section>
      <section className="bg-surface py-14 md:py-20">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((person) => (
              <InstructorCard key={person.id} person={person} className="bg-cream" />
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/contact" variant="signal">
              Contact us →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
