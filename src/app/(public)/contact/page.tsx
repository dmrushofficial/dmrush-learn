import { Suspense } from "react";
import { ContactForm } from "@/components/public/ContactForm";
import { ContactMethods } from "@/components/public/ContactMethods";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact DMrush Learn for course and admission questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-cream tx-paper">
        <Container className="py-12 lg:py-16">
          <p className="t-label text-accent">Contact</p>
          <h1 className="t-h2 mt-4 max-w-3xl text-ink">Ask about a course. Visit the campus.</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted md:text-lg">
            WhatsApp for a quick answer, or send an admission inquiry. Classes are on campus in Pattoki.
          </p>
          <div className="mt-10">
            <ContactMethods />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-line bg-cream p-6 shadow-sm md:p-8">
            <p className="t-label text-accent">Inquiry</p>
            <h2 className="mt-3 text-2xl font-bold text-ink">Admission form</h2>
            <p className="mt-2 text-sm text-muted">
              Tell us which course you want. We will follow up on WhatsApp or email.
            </p>
            <div className="mt-6">
              <Suspense fallback={<p className="text-sm text-muted">Loading form…</p>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
