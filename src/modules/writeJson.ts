import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Write file to disk
 * @param {string} outDir
 * @param {string} filename
 * @param {object} content
 * @returns {Promise<string>} full path written
 */
export async function writeJson(outDir: string, filename: string, content: Record<string, unknown>): Promise<void> {
  let path = join(outDir, `${filename}.json`)
  try {
    return await writeFile(path, JSON.stringify(content, null, 2), {
      encoding: 'utf8',
      flag: 'w',
    })
  } catch {
    throw Error('Error to the generate json ' + path)
  }
}
