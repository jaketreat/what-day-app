import React, { createContext, useReducer } from "react";

// Create context
export const AppContext = createContext();

// Initial state of the app
const initialState = {
  grid: { rows: 3, cols: 4 },
  blocks: [] // stores placed blocks
};

// Reducer handles ALL state updates
function reducer(state, action) {
  switch (action.type) {
    case "SET_GRID":
      return { ...state, grid: action.payload };

    case "ADD_BLOCK":
      return { ...state, blocks: [...state.blocks, action.payload] };

    case "UPDATE_BLOCK":
      return {
        ...state,
        blocks: state.blocks.map((b) =>
          b.id === action.payload.id ? action.payload : b
        )
      };

    default:
      return state;
  }
}

// Provider wraps the whole app
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}