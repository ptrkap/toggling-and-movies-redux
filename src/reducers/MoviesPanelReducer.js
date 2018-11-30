export default function(state = {}, action) {
  if (!state.movies) {
    state.movies = [];
  }
  switch(action.type) {
    case 'MOVIES_ADD_NEW':
      return {
        movies:[
          ...state.movies,
          action.movie
        ]
      }
    default:
      return state
  }
}