import { promises as fs } from 'fs'
import { join } from 'path'
import { createReadStream, createWriteStream } from 'fs'
import zlib from 'zlib'

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...await walk(full))
    else files.push(full)
  }
  return files
}

function shouldCompress(file) {
  return /(\.html|\.css|\.js|\.json|\.svg|\.txt|\.xml|\.webmanifest)$/i.test(file)
}

async function compressFile(file) {
  // gzip
  await new Promise((resolve, reject) => {
    const gzip = zlib.createGzip({ level: 9 })
    const out = createWriteStream(file + '.gz')
    createReadStream(file).pipe(gzip).pipe(out)
      .on('finish', resolve).on('error', reject)
  })
  // brotli
  await new Promise((resolve, reject) => {
    const br = zlib.createBrotliCompress({ params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } })
    const out = createWriteStream(file + '.br')
    createReadStream(file).pipe(br).pipe(out)
      .on('finish', resolve).on('error', reject)
  })
}

async function main() {
  const outDir = join(process.cwd(), 'out')
  try { await fs.access(outDir) } catch {
    console.error('Pasta "out" não encontrada. Rode `npm run build` antes.')
    process.exit(1)
  }
  const files = await walk(outDir)
  const targets = files.filter(shouldCompress)
  await Promise.all(targets.map(compressFile))
  console.log(`Pré-compressão concluída: ${targets.length} arquivos (gzip/br) em ${outDir}`)
}

main()