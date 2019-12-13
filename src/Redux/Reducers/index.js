//specify how the state should be changed after an action is dispatched to the store
//(prevState, action) => newState

import ADD_ITEM from "../Actions"

function itemReducer(state={list: []}, action){
    switch(action.type) {
        case ADD_ITEM:
          return Object.assign({}, state, 
              {
                list: [...state.list, action.item]
               }); 
         default: 
           return state;
     }
}

// const currentUser = (state = {}, action) => {
//   switch(action.type){
//       case "SET_USER":
//           return {
//               ...state,
//               user: action.payload,
//               loggedIn: true
//           }
//       case "LOG_OUT":
//           return {
//               ...state,
//               user: {},
//               loggedIn: false
//           }
//       default:
//           return state
//   }
// }

export default itemReducer