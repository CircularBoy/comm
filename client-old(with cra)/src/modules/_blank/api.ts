import api from '../../config/api';

export default {
  blank: () => {
    return api.get('houses');
  },
  test: () => {
    return api.get('houses');
  },
};
