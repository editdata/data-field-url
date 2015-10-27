var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var stringField = require('../index')

function render (state) {
  var elements = []

  elements.push(stringField(h, {
    href: state.url,
    oninput: function (e) {
      tree.update({ url: e.target.value })
    }
  }))

  elements.push(stringField(h, {
    display: true,
    href: state.url,
    onclick: function (e) { console.log('display', e.target.value) }
  }))

  return h('div.fields', elements)
}

var tree = vraf({ url: 'example.com' }, render, require('virtual-dom'))
document.body.appendChild(tree())
