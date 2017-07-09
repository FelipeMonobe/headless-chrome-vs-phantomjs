const { spawn } = require('child_process')
const { JSDOM } = require('jsdom')

const url = 'http://google.com'
const comando = 'chromium'
const parametros = ['--headless' ,'--disable-gpu', '--dump-dom', '--silent', url]

const main = () => {
  const headlessChromium = spawn(comando, parametros)
  let rawData

  headlessChromium.on('close', code => console.log(`Finalizado com código: ${code}`))
  headlessChromium.stderr.on('data', data => console.error(data.toString()))
  headlessChromium.stdout.on('data', (data) => { rawData += data })
  headlessChromium.stdout.on('close', () => {
    const html = rawData.toString()
    const dom = new JSDOM(html)
    const title = dom.window.document.querySelector('title')

    console.log(`Title: ${title}`)
  })
}

main()
