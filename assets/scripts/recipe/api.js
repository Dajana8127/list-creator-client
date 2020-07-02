'use strict'

const store = require('./../store')
const config = require('./../config')
// Creating a new Recipe
const recipeCreate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // data
    data: { // this data has to be data because its determine by $ajax
      recipe: {
        title: data.recipe.title,
        ingredients: data.recipe.ingredients,
        steps: data.recipe.steps,
        owner: store.user._id
      }
    }
  })
}

const getRecipes = function () {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRecipe = function (id) {
  return $.ajax({
    url: config.apiUrl + `/recipes/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRecipe = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/recipes/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: { // this data has to be data because its determine by $ajax
      recipe: {
        title: data.recipe.title,
        ingredients: data.recipe.ingredients,
        steps: data.recipe.steps
      }
    }
  })
}

// const RecipeUpdate = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/Recipes',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     // data
//     data: { // this data has to be data because its determine by $ajax
//       Recipe: {
//         title: data.Recipe.title,
//         description: data.Recipe.description,
//         owner: store.user._id
//       }
//     }
//   })
// }

module.exports = {
  recipeCreate,
  getRecipes,
  deleteRecipe,
  // RecipeUpdate
  updateRecipe
}
