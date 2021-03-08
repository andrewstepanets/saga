import { appActionTypes } from './app.types';

export const increment = () => ({
  type: appActionTypes.INCREMENT,
});
export const decremen = () => ({
  type: appActionTypes.DECREMENT,
});
