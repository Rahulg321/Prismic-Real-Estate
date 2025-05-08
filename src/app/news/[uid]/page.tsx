import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Head from "next/head";
import ContentBody from "@/components/ContentBody";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("news", uid).catch(() => notFound());

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.data.title as string,
    author: {
      "@type": "Person",
      name: "Alisha Bajaj",
      url: new URL("https://www.google.com"),
    },
    image: prismic.asImageSrc(page.data.featured_image),
    datePublished: page.data.date_published,
    dateModified: page.last_publication_date,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <ContentBody page={page} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("news", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("news");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
