import { ActionEnum } from '../actions/action-enum';
import {
  ActiveSkill,
  AddActiveSkillProps,
  RemoveActiveSkillProps
} from '../actions/action';

const EMPTY_ACTIVE_SKILL: ActiveSkill = {
  parents: [],
  children: []
};

const activeSkillReducer = (
  state: ActiveSkill,
  action: AddActiveSkillProps | RemoveActiveSkillProps
): ActiveSkill => {
  if (!action) {
    return { ...EMPTY_ACTIVE_SKILL };
  }
  switch (action.type) {
    case ActionEnum.ADD_ACTIVE_SKILL:
      return { ...action.activeSkill };
    case ActionEnum.REMOVE_ACTIVE_SKILL:
      return { ...EMPTY_ACTIVE_SKILL };
    default:
      return { ...EMPTY_ACTIVE_SKILL };
  }
};
export default activeSkillReducer;
