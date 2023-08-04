import { combineReducers, configureStore } from '@reduxjs/toolkit';
import activeSkillReducer from './reducers/activeSkillReducer';

// https://medium.com/geekculture/redux-with-reacts-functional-components-272f1008ee69

const rootReducer = combineReducers({
  activeSkill: activeSkillReducer
  // ... other reducers if you have any
});

export default configureStore({
  reducer: rootReducer
});
