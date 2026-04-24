import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Write file to disk
 * @param {string} outDir
 * @param {string} filenameWithoutExt
 * @param {object} content
 * @returns {Promise<string>} - full path written
 */
export async function writeJson(
  outDir: string,
  filenameWithoutExt: string,
  content: Record<string, unknown>
): Promise<string> {                             
  const path = join(outDir, `${filenameWithoutExt}.json`)
  await writeFile(path, JSON.stringify(content, null, 2), { encoding: "utf8", flag: "w" })
  return path
}
