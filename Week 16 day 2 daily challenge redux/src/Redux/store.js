import { createStore, combineReducers } from 'redux';

// Initial state
const initialState = {
  tasks: {} // Keys are date strings, values are arrays of task objects
};

// Reducer
const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        [action.payload.date]: [...(state[action.payload.date] || []), action.payload.task]
      };
    case 'EDIT_TASK':
      return {
        ...state,
        [action.payload.date]: state[action.payload.date].map(task =>
          task.id === action.payload.task.id ? action.payload.task : task
        )
      };
    case 'DELETE_TASK':
      return {
        ...state,
        [action.payload.date]: state[action.payload.date].filter(task => task.id !== action.payload.id)
      };
    default:
      return state;
  }
};

// Create store
const rootReducer = combineReducers({
  tasks: tasksReducer
});

const store = createStore(rootReducer);

export default store;
