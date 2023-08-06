import { SkillEnum } from '../../model/enums/skill.enum';
import { ActionEnum } from './action-enum';
import { AnyAction } from 'redux';

export interface ActiveSkill {
  parents: SkillEnum[];
  children: SkillEnum[];
}

interface ActiveSkillProps extends AnyAction {
  type: ActionEnum;
  activeSkill: ActiveSkill;
}

export interface AddActiveSkillProps extends ActiveSkillProps {
  type: ActionEnum.ADD_ACTIVE_SKILL;
}

export interface RemoveActiveSkillProps extends ActiveSkillProps {
  type: ActionEnum.REMOVE_ACTIVE_SKILL;
}

export function addActiveSkill(activeSkill: ActiveSkill): AddActiveSkillProps {
  return {
    type: ActionEnum.ADD_ACTIVE_SKILL,
    activeSkill: activeSkill
  };
}

export function removeActiveSkill(
  activeSkill: ActiveSkill
): RemoveActiveSkillProps {
  return {
    type: ActionEnum.REMOVE_ACTIVE_SKILL,
    activeSkill: activeSkill
  };
}
