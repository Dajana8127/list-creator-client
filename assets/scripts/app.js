'use strict'
const authEvents = require('./auth/events')
const recipeEvents = require('./recipe/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-recipe').on('submit', recipeEvents.onRecipeCreate)
  $('#all-recipes').on('submit', recipeEvents.onGetRecipes)
  $('#content').on('click', 'button.btn.btn-danger', recipeEvents.onDeleteRecipe)
  $('#clear-recipes').on('submit', recipeEvents.onClearRecipes)
  // ideas for updating
  $('#content').on('submit', '.form', recipeEvents.onUpdateRecipe)
  // $('#update-recipe').on('submit', recipeEvents.onUpdaterecipe)
  $('#Change-password').hide()
  $('#all-recipes').hide()
  $('#clear-recipes').hide()
  $('#Create-recipe').hide()
  $('#sign-out').hide()
  $('#new-recipe').hide()
})
