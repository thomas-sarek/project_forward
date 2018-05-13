const actionTypes = require('./actionTypes')

const actionCreators = {

  addUser: user => ({
    type: actionTypes.ADDUSER,
    payload: { user }
  }),
  addOrg: org => ({
    type: actionTypes.ADDORG,
    payload: { org }
  })


}

module.exports = {
  actionTypes,
  actionCreators
}
