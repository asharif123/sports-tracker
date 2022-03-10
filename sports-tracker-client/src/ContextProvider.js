import React, { createContext, useReducer } from 'react';

const CountContext = createContext();

const initialState = {
  characters: [],
  loading: false,
  loggedIn: false,
};

let reducer = (state, action) => {
  let oldCharacters;
  let index;
  let loggedIn;
  console.log(state, action);
  switch (action.type) {
    case 'LOGGIN':
      loggedIn = true;
      return { ...state, loggedIn: true };
    case 'LOGOUT':
      loggedIn = false;
      return { ...state, loggedIn: false  };
    case 'RESET':
      return initialState;
    case 'STOP LOADING':
      return { ...state, loading: false };
    case 'START LOADING':
      return { ...state, loading: true };
    case 'ADD CHARACTERS':
      return { ...state, characters: action.payload };
    case 'ADD CHARACTER':
      console.log(action);
      oldCharacters = state.characters;
      return { ...state, characters: [...oldCharacters, action.payload] };
    case 'KILL CHARACTER':
      oldCharacters = state.characters;
      index = oldCharacters.findIndex((c) => {
        return c.id == action.payload;
      });
      if (index > -1) oldCharacters[index].status = 'Dead';
      return { ...state, characters: [...oldCharacters] };
    case 'REVIVE CHARACTER':
      oldCharacters = state.characters;
      index = oldCharacters.findIndex((c) => c.id === action.payload);
      if (index > -1) oldCharacters[index].status = 'Alive';
      return { ...state, characters: [...oldCharacters] };
    default:
      return state;
  }
};

const CountContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, props.value || initialState);
  const value = { state, dispatch };
  return (
    <CountContext.Provider value={value}>
      {props.children}
    </CountContext.Provider>
  );
};

const CountContextConsumer = CountContext.Consumer;

export { CountContext, CountContextProvider, CountContextConsumer };
