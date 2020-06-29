'use strict'
const store = require('./../store.js')
const showListsTemplate = require('./../templates/lists.handlebars')
const createSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You create a new list successfully!')
  store.list = response.list
}
const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Creating a new list failed.')
}

const getSuccess = function (response) {
  const showListsHtml = showListsTemplate({ lists: response.lists })
  // compile html string via template
  $('.content').append(showListsHtml)
  $('form').trigger('reset')
  $('#message').text('See all of your playlists!')
}

const getFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Getting playlists failed.')
}

const deleteListSuccess = (id) => {
  $(`[data-id="${id}"]`).remove()
  // $('.content'`[data-id="${id}"]`).empty() // doesnt work
  $('#message').text('You successfully deleted a book!')
}

const deleteListFailure = () => {
  $('#message').text('Deleting a list failed!')
}

module.exports = {
  createSuccess,
  createFailure,
  getSuccess,
  getFailure,
  deleteListSuccess,
  deleteListFailure
}
