import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const sourceRoot = process.env.OBSIDIAN_PUBLISH_DIR;
const destinationRoot = path.resolve("src/content");
const collections = ["tech", "life"];

if (!sourceRoot) {
  console.error("Set OBSIDIAN_PUBLISH_DIR to the exported Obsidian content directory.");
  process.exit(1);
}

await mkdir(destinationRoot, { recursive: true });

for (const collection of collections) {
  const source = path.join(sourceRoot, collection);
  const destination = path.join(destinationRoot, collection);

  await rm(destination, { recursive: true, force: true });
  await cp(source, destination, { recursive: true });
  console.log(`Synced ${collection} from ${source}`);
}
