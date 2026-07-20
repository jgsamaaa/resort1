import Image from "next/image";
import Link from "next/link";
import type { JournalPost } from "@/lib/data/journal";
import Reveal from "@/components/Reveal";

export default function JournalCard({
  post,
  index = 0,
}: {
  post: JournalPost;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.1}>
      <Link href={`/journal/${post.slug}`} className="group block">
        <article>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-[1.06]"
            />
            <span className="absolute left-4 top-4 bg-pine-950/70 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.25em] text-linen-200 backdrop-blur-sm">
              {post.tag}
            </span>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-taupe-400">
            {post.date} · {post.readingTime}
          </p>
          <h3 className="mt-2.5 font-display text-2xl font-light leading-snug text-cream-50 transition-colors duration-300 group-hover:text-ember-400">
            {post.title}
          </h3>
          <p className="mt-2.5 text-sm font-light leading-relaxed text-mist-100/60">
            {post.excerpt}
          </p>
        </article>
      </Link>
    </Reveal>
  );
}
