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

module.exports = {
  onListCreate
}
