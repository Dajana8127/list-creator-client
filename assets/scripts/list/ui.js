'use strict'
const store = require('./../store.js')

const createSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You create a new list successfully!')
  store.list = response.list
}
const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Creating a new list failed.')
}

module.exports = {
  createSuccess,
  createFailure
}
