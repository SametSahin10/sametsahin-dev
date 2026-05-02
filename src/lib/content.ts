import { readdir } from "node:fs/promises";
import path from "node:path";
import { getCollection, type CollectionEntry } from "astro:content";

export type CollectionName = "tech" | "life";

async function hasCollectionFiles(collection: CollectionName) {
  const collectionDir = path.resolve("src/content", collection);

  try {
    const entries = await readdir(collectionDir, { withFileTypes: true });
    return entries.some(
      (entry) =>
        entry.isFile() && (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")),
    );
  } catch {
    return false;
  }
}

export async function getSortedCollection(collection: CollectionName) {
  if (!(await hasCollectionFiles(collection))) {
    return [];
  }

  const entries = await getCollection(collection);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeaturedEntries() {
  const collections = await Promise.all([
    getSortedCollection("tech"),
    getSortedCollection("life"),
  ]);

  return collections
    .flat()
    .filter((entry) => entry.data.featured)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, 4);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function getEntryHref(entry: CollectionEntry<CollectionName>) {
  return `/${entry.collection}/${entry.id}/`;
}
