import {ADD_FAV, REMOVE_FAV} from "./actions";

let initialState = {myFavorites: []};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      const added = [...state.myFavorites, action.payload];
      return {
        ...state,
        myFavorites: [...added],
      };

    case REMOVE_FAV:
      const remove = state.myFavorites.filter(
        (characters) => characters.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: [...remove],
      };

    default:
      return {...state};
  }
}

export default rootReducer;
