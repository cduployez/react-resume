import { HttpService } from './http-service';
import { ConfigService } from '../config/config-service';
import { SkillGroupDto } from '../../model/dtos/skill-group-dto';
import { SkillGroupDtoMapper } from '../../mappers/dtos/skill-group-dto-mapper';

/**
 * HTTP service for languages
 */
export class SkillsHttpService extends HttpService {
  constructor(configService: ConfigService) {
    super(configService, '/skills');
  }

  findGroups(): Promise<SkillGroupDto[]> {
    return this.httpGet('', SkillGroupDtoMapper.fromSkillGroupJsons);
  }
}
