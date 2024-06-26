import { REGISTRATION } from './action-types';

const stateName = 'blank';

const initialState = {
  _loadedAt: '',
  _updatedAt: '',
  _version: '1',
  data: [],
};

function reducer(state: typeof initialState = initialState, action?: any) {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default {
  reducer,
  initialState,
  stateName,
};
