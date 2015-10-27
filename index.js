var assert = require('assert')
var extend = require('xtend')
var createClassName = require('data-field-classname')
var addhttp = require('addhttp')

/**
Create a virtual-dom url data-field for use with [data-ui](https://github.com/editdata/data-ui).
@param {function} h virtual-dom `h` function
@param {Object} properties an options object, including any properties you can pass to virtual-dom/h
@param {Boolean} properties.display true for display mode, default is false for input mode
@param {String} properties.value any url
@param {String} value any url
@returns virtual-dom tree
@name createURLField
@example
var createURLField = require('data-field-string')

createURLField(h, { onclick: function (e){} }, 'example string')
*/
module.exports = function createURLField (h, properties, value) {
  properties = extend({
    tagName: 'input',
    type: 'url',
    display: false,
    size: 'normal',
    fieldType: 'input',
    attributes: {}
  }, properties)

  properties.dataType = 'url'
  properties.href = addhttp(properties.href || properties.value || value)
  assert.ok(properties.href)

  if (properties.display) {
    properties.tagName = 'a'
    properties.fieldType = 'display'
  }

  properties.className = createClassName(properties)
  delete properties.size
  properties.value = properties.href
  return h(properties.tagName, properties, properties.href)
}
