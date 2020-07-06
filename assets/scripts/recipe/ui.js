'use strict'
const store = require('./../store.js')
const showRecipesTemplate = require('./../templates/recipes.handlebars')
const createSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').show().text('Yaay! You created a new recipe!').delay(4000).fadeOut(800)
  store.recipe = response.recipe
  $('#new-recipe').show()
  $('#mesage1').hide()
}
const createFailure = function () {
  $('form').trigger('reset')
  $('#message').show().text('Creating a new recipe failed.')
  $('#mesage1').hide()
}

const getSuccess = function (response) {
  const showRecipesHtml = showRecipesTemplate({ recipes: response.recipes })
  // compile html string via template
  $('.content').show().html(showRecipesHtml)
  $('#new-recipe').hide()
  // $('form').trigger('reset')
  if ($('.content').is(':empty')) {
    $('#message').show().text("You don't have any recipes.").delay(4000).fadeOut(800)
  } else {
    $('#message').show().text('Now you can see all of your recepies in one place!').delay(4000).fadeOut(800)
  }
  $('#mesage1').hide()
}

const getFailure = function () {
  $('form').trigger('reset')
  $('#message').show().text('Getting recipes failed.')
  $('#mesage1').hide()
}

const deleteRecipeSuccess = (id) => {
  $(`[data-id="${id}"]`).remove()
  // $('.content'`[data-id="${id}"]`).empty() // doesnt work
  // $('#content').empty() // doesnt work
  // $('#content[data-id=${id}]') doesnt work

  // $('#content').hide()
  // $('#content').trigger('reset')
  // $('#content').show()

  // $('#content').empty()
  // getSuccess()
  $('#clear-recipes').trigger('submit')
  $('#all-recipes-button').trigger('click')
  $('#message1').show().text('You successfully deleted a recipe.').delay(4000).fadeOut(800)
  $('#message').hide()
}

const deleteRecipeFailure = () => {
  $('#message1').show().text('Deleting a recipe failed!')
}

const clearRecipes = () => {
  $('.content').empty()
  $('#new-recipe').hide()
  $('#mesage1').hide()
  $('#message').text('You successfully cleared recipes.')
}

// Update each Recipe
const updateRecipeSuccess = (id) => {
  $('#message1').show().text('You successfully updated a recipe!').delay(4000).fadeOut(800)
  $('form').trigger('reset')
  $('#clear-recipes').trigger('submit')
  $('#all-recipes-button').trigger('click')
  $('#message').hide()
}

const updateRecipeFailure = () => {
  $('#message1').show().text('Something went wrong!')
}

module.exports = {
  createSuccess,
  createFailure,
  getSuccess,
  getFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  clearRecipes,
  updateRecipeSuccess,
  updateRecipeFailure
}
