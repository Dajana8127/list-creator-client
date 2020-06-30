'use strict'
const authEvents = require('./auth/events')
const listEvents = require('./list/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-list').on('submit', listEvents.onListCreate)
  $('#all-lists').on('submit', listEvents.onGetLists)
  $('#content').on('click', 'button.btn.btn-danger', listEvents.onDeleteList)
  $('#clear-lists').on('submit', listEvents.onClearLists)
  // ideas for updating
  $('#content').on('click', 'button.btn.btn-primary', listEvents.onUpdateList)
  // $('#update-list').on('submit', listEvents.onUpdateList)
  $('#Change-password').hide()
  $('#all-lists').hide()
  $('#clear-lists').hide()
  $('#Create-list').hide()
  $('#sign-out').hide()
})
