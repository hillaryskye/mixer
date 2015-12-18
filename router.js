  require('dotenv').load();
var routes = require('routes')(),
        fs = require('fs'),
      view = require('mustache'),
      mime = require('mime'),
        db = require('monk')(process.env.MONGOLAB_URI),
    colors = db.get('colors'),
        qs = require('qs'),
      view = require('./view')

routes.addRoute('/colors', (req, res, url) => {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html')
    colors.find({}, function (err, docs) {
      if (err) {
        console.log(err);
        res.end(err);
        return;
      }
      var template = view.render('index', {colors: docs})
      console.log('colors from router', docs[0])
      var colorsFirst = docs[0]
      console.log('first', colorsFirst)
      res.end(template)
    })
  }
  if (req.method === 'POST') {
    var data = ''
    req.on('data', function (chunk) {
      data += chunk
    })
    req.on('end', function () {
      var color = qs.parse(data)
      colors.insert(color, function (err, doc) {
        console.log('inserted')
        if (err) res.end('oops from insert')
        res.writeHead(302, {'Location': '/colors'})
        res.end()
      })
    })
  }
})

routes.addRoute('/colors/:id/delete', (req, res, url) => {
  if(req.method === 'POST') {
    colors.remove({_id: url.params.id}, function(err, doc) {
      if (err) console.log(err)
      res.writeHead(302, {'Location': '/colors'})
      console.log('deleted')
      res.end()
    })
  }
})

routes.addRoute('/colors/:id', (req, res, url) => {
  if (req.method === 'GET') {
    colors.findOne({ _id: url.params.id }, function(err, docs) {
      if (err) console.log(err)
      console.log('findOne')
      var template = view.render('index', {colors: docs})
      res.end(template)
    })
  }
})

routes.addRoute('/public/*', (req, res, url) => {
  res.setHeader('Content-Type', mime.lookup(req.url))
  fs.readFile('.' + req.url, function(err, file) {
    if (err) {
      res.setHeader('Content-Type', 'text/html')
      res.end('404')
    }
    res.end(file)
  })
})



module.exports = routes
