'use strict'
const store = require('./../store.js')

const createSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('You signed up successfully! Welcome ' + response.user.email + '!')
}
const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed! Try different email address.')
}

const signInSuccess = function (response) {
  $('#message').text('Sign in was successful! Welcome back ' + response.user.email + '!' + ' Click Create a New List to create a new list!')
  $('form').trigger('reset')
  $('#notification').hide()
  $('#Sign-up').hide()
  $('#Sign-in').hide()
  $('#Change-password').show()
  $('#all-lists').show()
  $('#clear-lists').show()
  $('#Create-list').show()
  $('#sign-out').show()
  console.log(response.user)
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
