export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
        if (state.watchlist.some(movie => movie.id === action.payload.id) === false) 
        {
          if (state.watched.some(movie => movie.id === action.payload.id) === true) 
          {
            return {
              ...state,
              watched: state.watched.filter(
                (movie) => movie.id !== action.payload.id
              ), watchlist: [action.payload, ...state.watchlist]
            }
          }
          return {
            ...state,
            watchlist: [action.payload, ...state.watchlist]
          };
        }
        return state;

    case "ADD_MOVIE_TO_WATCHED":
        if (state.watched.some(movie => movie.id === action.payload.id) === false) 
        {
          if (state.watchlist.some(movie => movie.id === action.payload.id) === true) 
          {
            return {
              ...state,
              watchlist: state.watchlist.filter(
                (movie) => movie.id !== action.payload.id
              ), watched: [action.payload, ...state.watched]
            }
          }
          return {
            ...state,
            watched: [action.payload, ...state.watched]
          };
        }
        return state;

    case "NONE":
      if (state.watchlist.some(movie => movie.id === action.payload) === true) 
      {
        return removeFromWatchlist(state, action.payload);
      } 
      else if (state.watched.some(movie => movie.id === action.payload) === true) 
      {
        return removeFromWatched(state, action.payload);
      }
      return state;
    
      default:
      return state;
  }
};

const removeFromWatchlist = (state, item) => {
  return {
    ...state,
    watchlist: state.watchlist.filter((movie) => movie.id !== item)
  };
};

const removeFromWatched = (state, item) => {
  return {
    ...state,
    watched: state.watched.filter((movie) => movie.id !== item)
  };
};
