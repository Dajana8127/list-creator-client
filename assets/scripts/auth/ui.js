'use strict'
const store = require('./../store.js')

const createSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').show().text('You signed up successfully! Welcome ' + response.user.email + '! Sign in to start creating your own cookbook.').delay(3000).fadeOut(800)
  $('#notification').hide()
  $('#mesage1').hide()
}
const createFailure = function () {
  $('form').trigger('reset')
  $('#message').show().text('Sign up failed! Try different email address.').delay(5000).fadeOut(800)
  $('#mesage1').hide()
}

const signInSuccess = function (response) {
  $('#message').show().text('Sign in was successful! Welcome back ' + response.user.email + '!' + ' Click Create a New Recipe to create a new recipe!').delay(3000).fadeOut(800)
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
  $('#mesage1').hide()
  store.user = response.user
}
const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#message').show().text("Sign in failed! Your email and password don't match our records.").delay(5000).fadeOut(800)
  $('#mesage1').hide()
  store.user = response.user
}

const changePasswordSuccess = function (response) {
  $('#message').show().text('Your password is changed.').delay(3000).fadeOut(800)
  $('form').trigger('reset')
  $('#mesage1').hide()
}
const changePasswordFailure = function (response) {
  $('form').trigger('reset')
  $('#message').show().text('Password change was unsuccessful.').delay(5000).fadeOut(800)
  $('#mesage1').hide()
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').show().text('You signed out successfully!').delay(3000).fadeOut(800)
  $('#notification').show()
  $('#Sign-up').show()
  $('#Sign-in').show()
  $('#Change-password').hide()
  $('#all-recipes').hide()
  $('#clear-recipes').hide()
  $('#Create-recipe').hide()
  $('#sign-out').hide()
  $('#new-recipe').hide()
  $('#mesage1').hide()
  $('.content').hide()
  store.user.token = null
}

const signOutFailure = function (response) {
  $('form').trigger('reset')
  $('#message').show().text('Your sign out failed.')
  $('#mesage1').hide()
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
