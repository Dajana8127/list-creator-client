'use strict'
const store = require('./../store.js')
const showRecipesTemplate = require('./../templates/recipes.handlebars')
const createSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Yaay! You created a new recipe!')
  store.recipe = response.recipe
  $('#new-recipe').show()
}
const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Creating a new recipe failed.')
}

const getSuccess = function (response) {
  const showRecipesHtml = showRecipesTemplate({ recipes: response.recipes })
  // compile html string via template
  $('.content').html(showRecipesHtml)
  // $('form').trigger('reset')
  $('#message').text('Now you can see all of your recepies in one place!')
}

const getFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Getting recipes failed.')
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
}

const deleteRecipeFailure = () => {
  $('#message').text('Deleting a recipe failed!')
}

const clearRecipes = () => {
  $('.content').empty()
}

// Update each Recipe
const updateRecipeSuccess = (id) => {
  $('#message').text('You successfully updated a recipe!')
  $('form').trigger('reset')
  $('#clear-recipes').trigger('submit')
  $('#all-recipes-button').trigger('click')
}

const updateRecipeFailure = () => {
  $('#message').text('Deleting a recipe failed!')
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
