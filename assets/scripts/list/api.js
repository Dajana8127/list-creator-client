'use strict'

const store = require('./../store')
const config = require('./../config')
// Creating a new list
const listCreate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // data
    data: { // this data has to be data because its determine by $ajax
      list: {
        title: data.list.title,
        description: data.list.description,
        owner: store.user._id
      }
    }
  })
}

module.exports = {
  listCreate
}
