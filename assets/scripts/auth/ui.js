'use strict'
const store = require('./../store.js')

const createSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You signed up successfully! Welcome ' + response.user.email + '! Sign in to start creating your own cookbook.')
  $('#notification').hide()
}
const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed! Try different email address.')
}

const signInSuccess = function (response) {
  $('#message').text('Sign in was successful! Welcome back ' + response.user.email + '!' + ' Click Create a New Recipe to create a new recipe!')
  $('form').trigger('reset')
  $('#notification').hide()
  $('#Sign-up').hide()
  $('#Sign-in').hide()
  $('#Change-password').show()
  $('#all-recipes').show()
  $('#clear-recipes').show()
  $('#Create-recipe').show()
  $('#sign-out').show()
  $('#new-recipe').hide()
  store.user = response.user
}
const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text("Sign in failed! Your email and password don't match our records.")
  store.user = response.user
}

const changePasswordSuccess = function (response) {
  $('#message').text('Your password is changed.')
  $('form').trigger('reset')
}
const changePasswordFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password change was unsuccessful.')
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You signed out successfully!')
  $('#notification').show()
  $('#Sign-up').show()
  $('#Sign-in').show()
  $('#Change-password').hide()
  $('#all-recipes').hide()
  $('#clear-recipes').hide()
  $('#Create-recipe').hide()
  $('#sign-out').hide()
  $('#new-recipe').hide()
  store.user.token = null
}

const signOutFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Your sign out failed.')
}

module.exports = {
  createSuccess,
  createFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
