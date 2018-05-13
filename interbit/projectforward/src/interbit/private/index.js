// © 2018 BTL GROUP LTD -  This package is licensed under the MIT license https://opensource.org/licenses/MIT
const Immutable = require('seamless-immutable')

const {
  cAuthConsumerCovenant,
  mergeCovenants
} = require('interbit-covenant-tools')

const { actionTypes, actionCreators } = require('./actions')

const initialState = Immutable.from({
  chainMetadata: { name: `Project Forward Main Chain` },
  balances: [
    {
      "ID": -1,
      "Name": "Project Forward",
      "type": "ProjectForward",
      "balance": 1251699990
    },
    {
      "ID": 1,
      "Name": "American Red Cross",
      "type": "ORG",
      "balance": 0
    },
    {
      "ID": 5,
      "Name": "Bill Gates",
      "type": "USER",
      "balance": 8
    },
    {
      "ID": 6,
      "Name": "Tristan Thoma",
      "type": "USER",
      "balance": 45
    }
  ],
  volEvents: [
    {
      "timestampe": 1526349100,
      "nfporgID": 4,
      "userID": 6,
      "hours": 4.8,
      "ForwardCoins": 24,
      "clockInHash": "pxX4rqH3t7OrkpxX4rqH3h",
      "clockOutHash":"aSwMvcC8hpxX4rqH3t7Ork",
      "clockInProofID": "52eb62c0-f556-11e7-bcf8-016fed1c55ad",
      "clockOutProofID": "52eb62c0-f556-11e7-bcf8-016fed1c55ad"
    },
    {
      "timestampe": 1526217900,
      "nfporgID": 1,
      "userID": 6,
      "hours": 4.23,
      "ForwardCoins": 21,
      "clockInHash": "pxX4rqH3t7OrkpxX4rqH3h",
      "clockOutHash":"aSwMvcC8hpxX4rqH3t7Ork",
      "clockInProofID": "52eb62c0-f556-11e7-bcf8-016fed1c55ad",
      "clockOutProofID": "52eb62c0-f556-11e7-bcf8-016fed1c55ad"
    }
  ]

})
const reducer = (state = initialState, action) => {
  if (action.type.endsWith('STROBE')) {
    return state
  }

  console.log('REDUCING: ', action)

  switch (action.type) {
    case actionTypes.ADDUSER: {
      console.log('****** USER ****')

      const id = action.payload.user

      const user = {ID: id,
        type: 'USER',
        balance: 0}
      const balances = state.getIn(['balances'], Immutable.from([]))

      const dupp = balances.some(balance => balance.id === id);


      return (user && !dupp) ? state.set('balances', balances.concat(user)) : state
    }

    case actionTypes.ADDORG: {
      console.log('****** ORG ****')
      const id = action.payload.org
      const org = {ID: id,
        type: 'ORG',
        balance: 0
      }
      const balances = state.getIn(['balances'], Immutable.from([]))

      return org ? state.set('balances', balances.concat(org)) : state
    }

    default:
      return state
  }
}


const covenant = {
  actionTypes,
  actionCreators,
  initialState,
  reducer
}

module.exports = mergeCovenants([covenant, cAuthConsumerCovenant])
