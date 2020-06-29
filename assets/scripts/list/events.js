'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onListCreate = function (event) {
  // prevent
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.listCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

module.exports = {
  onListCreate
}
