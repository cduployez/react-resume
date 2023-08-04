import { HttpService } from './http-service';
import { ConfigService } from '../config/config-service';
import { ProjectDto } from '../../model/dtos/project-dto';
import { ProjectDtoMapper } from '../../mappers/dtos/project-dto-mapper';

export class ProjectsHttpService extends HttpService {
  constructor(configService: ConfigService) {
    super(configService, '/projects');
  }

  findAll(): Promise<ProjectDto[]> {
    return this.httpGet('', ProjectDtoMapper.fromProjectJsons);
  }
}
