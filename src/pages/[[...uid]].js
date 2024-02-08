import { asLink } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default function Page({ page }) {
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  const page = await client.getByUID(
    "page",
    params.uid ? params.uid[0] : "home"
  );

  return {
    props: { page },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pagesPaths = await client.getAllByType("Page");

  // console.log(pagesPaths);
  let pages = pagesPaths.map((page) => {
    return asLink(page);
  });
  return {
    paths: [...pages, "/"],
    fallback: false,
  };
}
