import { SkillEnum } from '../../model/enums/skill.enum';

export class SkillMessages {
  private readonly skillCssClassRecord: Record<SkillEnum, string> = {
    [SkillEnum.JAVA]: 'java',
    [SkillEnum.JAVA_EE]: 'javaee',
    [SkillEnum.SPRING]: 'spring',
    [SkillEnum.C_PLUS_PLUS]: 'cplusplus',
    [SkillEnum.C_SHARP]: 'csharp',
    [SkillEnum.MVC_NET]: 'mvcnet',
    [SkillEnum.NET]: 'net',
    [SkillEnum.ANGULAR]: 'angular',
    [SkillEnum.PYTHON]: 'python',
    [SkillEnum.ANDROID]: 'android',
    [SkillEnum.XAMARIN]: 'xamarin',
    [SkillEnum.HTML]: 'html',
    [SkillEnum.CSS]: 'css',
    [SkillEnum.JAVASCRIPT]: 'javascript',
    [SkillEnum.TYPESCRIPT]: 'typescript',
    [SkillEnum.KEYCLOAK]: 'keycloak',
    [SkillEnum.MYSQL]: 'mysql',
    [SkillEnum.MONGODB]: 'mongodb',
    [SkillEnum.GITLAB_CI]: 'gitlab',
    [SkillEnum.DOCKER]: 'docker',
    [SkillEnum.KUBERNETES]: 'kubernetes',
    [SkillEnum.AZURE]: 'azure',
    [SkillEnum.OPENSHIFT]: 'openshift',
    [SkillEnum.APACHE_TAPESTRY]: 'apache-tapestry'
  };

  skillCssClass(skill: SkillEnum | null): string {
    return skill ? this.skillCssClassRecord[skill] : '';
  }

  optionalClass(skillEnum: SkillEnum): string {
    return skillEnum ? this.skillCssClass(skillEnum) : '';
  }
}
