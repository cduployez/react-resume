import React, { useEffect, useState } from 'react';
import { UseStateType } from '../../types/use-state-type';
import { ConfigService } from '../../helpers/config/config-service';
import Category from '../Category/Category';
import { IconsService } from '../../helpers/ui/icons.service';
import { SkillsHttpService } from '../../helpers/http/skills-http.service';
import ItemContainer from '../ItemContainer/ItemContainer';
import styles from './Skills.module.scss';
import { SkillGroupDto } from '../../model/dtos/skill-group-dto';
import { SkillGroup } from '../../model/views/skill-group';
import { SkillItem } from '../../model/views/skill-item';
import { SkillGroupMapper } from '../../mappers/views/skill-group-mapper';
import { SkillTypeEnum } from '../../model/enums/skill-type-enum';
import FaSkill from '../FaSkill/FaSkill';
import { FaSkillItem } from '../../model/views/fa-skill-item';
import { JsSkillItem } from '../../model/views/js-skill-item';
import { TextSkillItem } from '../../model/views/text-skill-item';
import JsSkill from '../JsSkill/JsSkill';
import TextSkill from '../TextSkill/TextSkill';

const configService: ConfigService = new ConfigService(process.env);
const iconsService: IconsService = new IconsService();

type SkillsMessages = {
  categoryTitle: string;
};

const messages: SkillsMessages = {
  categoryTitle: 'Compétences'
};

function Skills(): React.JSX.Element {
  const [loading, setLoading]: UseStateType<boolean> = useState<boolean>(false);
  const [skillGroups, setSkillGroups]: UseStateType<SkillGroup[]> = useState<
    SkillGroup[]
  >([]);

  useEffect(() => {
    const skillsHttpService: SkillsHttpService = new SkillsHttpService(
      configService
    );

    setLoading(true);
    skillsHttpService
      .findGroups()
      .then((skillGroups: SkillGroupDto[]) => {
        setSkillGroups(
          SkillGroupMapper.fromSkillGroupDtos(skillGroups, iconsService)
        );
      })
      .catch(() => {
        setSkillGroups([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function skillElement(
    skill: SkillItem,
    skillKey: number
  ): React.JSX.Element | null {
    switch (skill.skillTypeEnum) {
      case SkillTypeEnum.FA:
        return (
          <div key={skillKey}>
            <FaSkill item={skill as FaSkillItem} />
          </div>
        );
      case SkillTypeEnum.JS:
        return (
          <div key={skillKey}>
            <JsSkill item={skill as JsSkillItem} />
          </div>
        );
      case SkillTypeEnum.TEXT:
        return (
          <div key={skillKey}>
            <TextSkill item={skill as TextSkillItem} />
          </div>
        );
    }
    return null;
  }

  function skillsElements(skills: SkillItem[]): React.JSX.Element {
    let skillKey: number = 0;
    return <>{skills.map(skill => skillElement(skill, skillKey++))}</>;
  }

  function skillGroupElement(skillGroup: SkillGroup): React.JSX.Element {
    return (
      <>
        <p className={styles.skillTitle}>{skillGroup.title}</p>
        <div className={styles.rowContainer}>
          <div className={styles.row}>{skillsElements(skillGroup.skills)}</div>
        </div>
      </>
    );
  }

  function skillGroupsElements(): React.JSX.Element {
    let skillGroupKey: number = 0;
    return (
      <>
        {skillGroups.map((skillGroup: SkillGroup) => {
          return (
            <ItemContainer
              contentElement={skillGroupElement(skillGroup)}
              key={`skillGroup-${skillGroupKey++}`}
            />
          );
        })}
      </>
    );
  }

  return (
    <Category
      categoryTitle={messages.categoryTitle}
      loading={loading}
      contentElement={skillGroupsElements()}
    />
  );
}

export default Skills;
