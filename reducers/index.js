import { combineReducers } from 'redux'
import stepCounter from './stepCounter'

const rootReducer = combineReducers({
    stepCounter
})

export default rootReducer

// export default (state = 0, action) => {
//     switch (action.type) {
//       case 'UPDATE_STEP':
//         console.log("UPDATE_STEP action is triggered");
//         return state + 1
//       default:
//         return state
//     }
// }
// function stepCounterReducer(state = 1111, action) {
//     switch (action.type) {
//       case 'UPDATE_STEP':
//         return Object.assign({}, state, {
//           stepCounter: 88888
//         })
//       default:
//         return state
//     }
//   }

// export default stepCounterReducer;