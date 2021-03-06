'use strict'
const config = require('./../config')
const store = require('./../store.js')
// User sign up
const userCreate = function (formData) { // parameter can be anything
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    // data
    data: { // this data has to be data because its determine by $ajax
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password_confirmation
      }
    }
  })
}

const userSignIn = function (formData) { // parameter can be anything
  //
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // data
    data: { // this data has to be data because its determine by $ajax
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password
      }
    }
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: formData.password.old,
        new: formData.password.new
      }
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  userCreate,
  userSignIn,
  changePassword,
  signOut
}
