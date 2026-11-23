// One-Line Laugh Sprint — one original funny line on everyday life.
// The twist lands in the last words: asked for a contactless drop-off,
// then hid behind the curtain to watch it happen anyway.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I told the delivery driver 'leave it at the door', then spent twenty minutes hiding behind the curtain, watching him leave it at the door.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
