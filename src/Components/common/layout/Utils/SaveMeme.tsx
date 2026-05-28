import html2canvas from 'html2canvas'

async function saveMeme() {
  const meme = document.querySelector('.meme') as HTMLDivElement

  const image = document.querySelector(
    '.meme-image'
  ) as HTMLImageElement

  if (!meme || !image) return

  const canvas = await html2canvas(meme, {
    width: image.width,
    height: image.height,
  })

  const link = document.createElement('a')

  link.download = 'meme.png'

  link.href = canvas.toDataURL('image/png')

  link.click()
}

export default saveMeme