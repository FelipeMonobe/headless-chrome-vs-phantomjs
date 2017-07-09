const webpage = require('webpage')

const page = webpage.create()
const url = 'http://google.com'

page.open(url, function(status) {
  const title = page.evaluate(function() {
    return document.title
  })

  console.log('Title: ' + title);
  phantom.exit();
});
