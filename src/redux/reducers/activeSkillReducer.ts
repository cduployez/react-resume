import { ActionEnum } from '../actions/action-enum';
import {
  ActiveSkill,
  AddActiveSkillProps,
  RemoveActiveSkillProps
} from '../actions/action';

const activeSkillReducer = (
  state: ActiveSkill = {
    parent: null,
    children: []
  },
  action: AddActiveSkillProps | RemoveActiveSkillProps
) => {
  switch (action.type) {
    case ActionEnum.ADD_ACTIVE_SKILL:
      return action.activeSkill;
    case ActionEnum.REMOVE_ACTIVE_SKILL:
      return action.activeSkill;
    default:
      return state;
  }
};
export default activeSkillReducer;
