#!/usr/bin/env node
// @ts-check

/**
 * script.js - CLI generator for Minecraft recipe JSONs
 *
 * Usage examples:
 *  node script.js --all --type slab,stairs --out "C:\Users\Octav\OneDrive\Desktop\Datapack Recipes v1\data\dp-recipes\recipes"
 *  node script.js --wood dark_oak --type slab --count 6 --id "mymod:custom_slab"
 *  node script.js --wood oak --type trapdoor --pattern '["XX","XX","XX"]'
 */
import { parseArgs } from 'node:util'
import { mkdir } from 'node:fs/promises'
import { exit } from 'node:process'
import { TYPE_WOOD } from './src/const/index.js'
import { generateOne } from './src/index.js'

const DEFAULT_OUTPUT = "C:\\Users\\Octav\\OneDrive\\Desktop\\Datapack Recipes v1\\data\\dp-recipes\\recipes"

const { log, error } = console

async function main() {
  const { values } = parseArgs({
    options: {
      all: { type: "boolean", short: "a", default: false },
      wood: { type: "string", short: "w", default: '' },
      type: { type: "string", short: "t", default: '' },
      key: { type: "string", default: '' },
      value: { type: "string", default: '' },
      pattern: { type: "string", default: '', short: 'p' },
      category: { type: "string", default: '' },
      group: { type: "string", default: '' },
      count: { type: "string", default: '' },
      id: { type: "string", default: '' },
      out: { type: "string", default: '' },
      dry: { type: "boolean", short: "d", default: false },
      name: { type: "string", default: '' }
    },
    allowPositionals: true,
  });
  const {
    out,
    dry,
    all,
    wood,
    key,
    category,
    count,
    group,
    id,
    name,
    pattern,
    type,
    value
  } = values

  const types = type
    ? String(type).split(",").map(s => s.trim()).filter(Boolean)
    : ["stairs", "slab", "trapdoor"];

  // validate types
  const allowedTypes = ["stairs", "slab", "trapdoor"]
  for (const t of types) {
    if (!allowedTypes.includes(t)) {
      error(`Tipo no válido: "${t}". Permitidos: ${allowedTypes.join(", ")}`);
      exit(1);
    }
  }

  // compute wood list
  /** @type {Array<string>} */
  let woods = [];
  if (Boolean(all)) {
    woods = Object.values(TYPE_WOOD);
  } else if (wood) {
    woods = [wood];
  } else {
    error("Debes usar --all o --wood <nombre>");
    exit(1);
  }

  if (!Boolean(dry)) {
    await mkdir(out ?? DEFAULT_OUTPUT, { recursive: true });
  } else {
    log("[DRY RUN] No se escribirán archivos.");
  }

  for (const w of woods) {
    for (const t of types) {
      if (Boolean(all)) {
        await generateOne(
          `${w}_${t}`, {
          // @ts-ignore
          pattern,
          count: Number(count),
          id,
          out: values.out ?? DEFAULT_OUTPUT,
          dry,
          // @ts-ignore
          category,
          key,
          value,
          group
        });
      }
      await generateOne(
        /** @type {import('./src/jsdoc.d.mjs').Name} */(name), {
        // @ts-ignore
        pattern,
        count: Number(count),
        id,
        out: values.out ?? DEFAULT_OUTPUT,
        dry,
        // @ts-ignore
        category,
        key,
        value,
        group
      });
    }
  }

  log("Done.");
}

main().catch(err => {
  error("Fatal:", err)
  exit(1)
})
