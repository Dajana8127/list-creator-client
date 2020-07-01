'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onListCreate = function (event) {
  // prevent
  event.preventDefault()
  const title = $('#title').val()
  $('#display-title').html(title)

  const form = event.target
  const data = getFormFields(form)
  api.listCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)

  const description = $('#description').val()
  $('#display-description').html(description)
}

const onGetLists = function (event) {
  // prevent
  event.preventDefault()
  api.getLists()
    .then(ui.getSuccess)
    .catch(ui.getFailure)
}

const onDeleteList = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(event)
  console.log(id)
  api.deleteList(id)
    .then(ui.deleteListSuccess)
    .catch(ui.deleteListFailure)
}

const onUpdateList = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = $(event.target).data('id')
  console.log(id)
  console.log(data)
  api.updateList(data, id)
    .then(ui.updateListSuccess)
    .catch(ui.updateListFailure)
}

// const onUpdateList = function (event) {
//   // prevent
//   event.preventDefault()
//   const title = $('#updated-title').val()
//   $('#display-title').html(title)
//
//   const form = event.target
//   const data = getFormFields(form)
//   api.listUpdate(data)
//     .then(ui.updateSuccess)
//     .catch(ui.updateFailure)
//
//   const description = $('#updated-description').val()
//   $('#display-description').html(description)
// }

const onClearLists = (event) => {
  event.preventDefault()
  ui.clearLists()
}

module.exports = {
  onListCreate,
  onGetLists,
  onDeleteList,
  onUpdateList,
  onClearLists
  // onUpdateList
}
