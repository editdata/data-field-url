var test = require('tape')
var h = require('virtual-dom/h')
var createField = require('../index')

test('create an input field', function (t) {
  var field = createField(h, { value: 'example.com' })
  t.equal(field.tagName, 'INPUT')
  t.equal(field.properties.href, 'http://example.com')
  t.end()
})

test('create a display field', function (t) {
  var field = createField(h, {
    value: 'example.com',
    display: true
  })
  t.equal(field.tagName, 'A')
  t.equal(field.properties.href, 'http://example.com')
  t.end()
})
