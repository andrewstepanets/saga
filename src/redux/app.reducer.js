import { appActionTypes } from './app.types';

const INITIAL_STATE = {
  value: 0,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_FROM_SAGA':
      return {
        ...state,
        value: state.value + 1,
      };
    case appActionTypes.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default appReducer;
