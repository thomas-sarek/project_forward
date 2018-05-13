const covenant = require('../interbit/private')

const covenantName = 'Interbit Template Private Chain'


const textParamLabel = 'Enter some text'

const addUserLabel = 'Add-up some users'
const addOrgLabel = 'Add-up an Organization'


const actionCreators = {
  addUser: () => ({
    type: addUserLabel,
    arguments: {
      [textParamLabel]: ''
    },
    invoke: ({ [textParamLabel]: text }) => covenant.actionCreators.addUser(text)
  }),
  addOrg: () => ({
    type: addOrgLabel,
    arguments: {
      [textParamLabel]: ''
    },
    invoke: ({ [textParamLabel]: text }) => covenant.actionCreators.addOrg(text)
  })

}

module.exports = {
  covenantName,
  actionCreators
}
