'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onRecipeCreate = function (event) {
  // prevent
  event.preventDefault()
  const title = $('#title').val()
  $('#display-title').html(title)

  const form = event.target
  const data = getFormFields(form)
  api.recipeCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)

  // const p2 = document.createElement('p')
  // p2.innerHTML = 'Ingredients:'
  // $('#display-ingredients').appendChild(p2)
  const ingredients = $('#ingredients').val()
  $('#display-ingredients').html(ingredients)
  // const p3 = document.createElement('p')
  // p3.innerHTML = 'Steps:'
  // $('#display-steps').appendChild(p3)
  const steps = $('#steps').val()
  $('#display-steps').html(steps)
}

const onGetRecipes = function (event) {
  // prevent
  event.preventDefault()
  api.getRecipes()
    .then(ui.getSuccess)
    .catch(ui.getFailure)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteRecipe(id)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.deleteRecipeFailure)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = $(event.target).data('id')
  api.updateRecipe(data, id)
    .then(ui.updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
}

// const onUpdaterecipe = function (event) {
//   // prevent
//   event.preventDefault()
//   const title = $('#updated-title').val()
//   $('#display-title').html(title)
//
//   const form = event.target
//   const data = getFormFields(form)
//   api.recipeUpdate(data)
//     .then(ui.updateSuccess)
//     .catch(ui.updateFailure)
//
//   const description = $('#updated-description').val()
//   $('#display-description').html(description)
// }

const onClearRecipes = (event) => {
  event.preventDefault()
  ui.clearRecipes()
}

module.exports = {
  onRecipeCreate,
  onGetRecipes,
  onDeleteRecipe,
  onUpdateRecipe,
  onClearRecipes
  // onUpdaterecipe
}
