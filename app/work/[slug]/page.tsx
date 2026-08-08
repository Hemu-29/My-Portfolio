import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/content/projects";
import CaseView from "./CaseView";

/* Case study — the template from 03_CONTENT_STRATEGY.md §4:
   hero → context → problem → process → decisions → outcome → reflection → next.
   Statically generated per project; content lives in content/projects.ts.

   The page body is a client component (CaseView) because the EN/FR switch is
   React state — metadata stays here, on the server, where crawlers read it. */

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study · Gireesh`,
    description: project.oneLiner,
  };
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  if (!PROJECTS.some((p) => p.slug === slug)) notFound();

  return <CaseView slug={slug} />;
}
