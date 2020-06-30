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

const getLists = function () {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteList = function (id) {
  return $.ajax({
    url: config.apiUrl + `/lists/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateList = function (data, id) {
  console.log(data)
  console.log(id)
  return $.ajax({
    url: config.apiUrl + `/lists/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: { // this data has to be data because its determine by $ajax
      list: {
        title: data.list.title,
        description: data.list.description
      }
    }
  })
}

// const listUpdate = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/lists',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     // data
//     data: { // this data has to be data because its determine by $ajax
//       list: {
//         title: data.list.title,
//         description: data.list.description,
//         owner: store.user._id
//       }
//     }
//   })
// }

module.exports = {
  listCreate,
  getLists,
  deleteList,
  // listUpdate
  updateList
}
