import { GET_HOUSES } from './action-types';

const stateName = 'house';

const initialState = {
  _loadedAt: '',
  _updatedAt: '',
  _version: '1',
  data: [],
};

function reducer(state: typeof initialState = initialState, action?: any) {
  // const curTime = new Date();

  switch (action.type) {
    case GET_HOUSES:
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
