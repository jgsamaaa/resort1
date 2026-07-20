import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { journal, getPost, relatedPosts } from "@/lib/data/journal";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import JournalCard from "@/components/JournalCard";
import Button from "@/components/Button";

export function generateStaticParams() {
  return journal.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Story not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        image={post.image}
        imageAlt={post.title}
        eyebrow={`${post.tag} · ${post.readingTime}`}
        title={post.title}
        subtitle={post.date}
      />

      <article className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="font-display text-2xl font-light italic leading-relaxed text-linen-200">
              {post.excerpt}
            </p>
            <div className="rule-ember mt-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-7">
              {post.body.map((block, i) =>
                block.type === "h2" ? (
                  <h2
                    key={i}
                    className="pt-4 font-display text-3xl font-light text-cream-50"
                  >
                    {block.text}
                  </h2>
                ) : block.type === "quote" ? (
                  <blockquote
                    key={i}
                    className="border-l-2 border-ember-500/60 pl-6 font-display text-2xl font-light italic leading-relaxed text-ember-400/90"
                  >
                    {block.text}
                  </blockquote>
                ) : (
                  <p
                    key={i}
                    className="text-base font-light leading-[1.9] text-mist-100/80"
                  >
                    {block.text}
                  </p>
                )
              )}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-col items-center gap-4 border-t border-mist-100/10 pt-10 sm:flex-row sm:justify-center">
              <Button href="/booking">Reserve Your Stay</Button>
              <Button href="/offers" variant="outline">
                Browse Offers
              </Button>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="relative border-t border-mist-100/10 bg-pine-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <h2 className="font-display text-4xl font-light text-cream-50">
              Keep reading
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {relatedPosts(post.slug).map((related, i) => (
              <JournalCard key={related.slug} post={related} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
