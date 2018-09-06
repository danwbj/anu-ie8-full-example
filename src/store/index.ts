import { init } from 'rematch';
import { catModel } from '../models';

const store = init({
  models: {
    catModel
  }
});

export default store;
