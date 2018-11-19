// import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = { step: 87 }

export default function stepCounterReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_STEP':
        console.log("UPDATE_STEP action is triggered");
        return {
            step: action.step.stepStr
        };
    // case ADD_PERSON:
    //   return {
    //     people: [...state.people, action.person],
    //   };
    // case DELETE_PERSON:
    //   return {
    //     people: state.people.filter(p => p.name !== action.person.name),
    //   };
    default:
      return state;
  }
}