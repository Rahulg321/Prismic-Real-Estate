import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { filter } from "@prismicio/client";
import RealEstateListing from "@/components/real-estate-listing";
import { Suspense } from "react";
import { PropertyCardSkeleton } from "@/components/skeletons/property-skeleton";
import FetchPageProperties from "@/components/FetchPageProperties";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("buyresidential", uid)
    .catch(() => notFound());

  return (
    <div className="">
      <SliceZone slices={page.data.slices} components={components} />
      <Suspense
        fallback={
          <div className="space-y-4 md:space-y-6">
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
          </div>
        }
      >
        <FetchPageProperties pageId={page.id} />
      </Suspense>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("buyresidential", uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("buyresidential");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
