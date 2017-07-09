const phantomjs = require('phantomjs-prebuilt')

const program = phantomjs.exec('src/scrap.js')
const main = () => {
  program.stdout.pipe(process.stdout)
  program.stderr.pipe(process.stderr)
}

main()
