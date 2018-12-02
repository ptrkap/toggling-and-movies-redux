export default function(state = {}, action) {
  switch(action.type) {
    case 'MOVIES_ADD_NEW':
      return {
        movies:[
          ...state.movies,
          action.movie
        ]
      }
    default:
      if (!state.movies) {
        state.movies = [];
      }
      return state
  }
}