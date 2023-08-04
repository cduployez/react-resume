import { HttpService } from './http-service';
import { ConfigService } from '../config/config-service';
import { FormationDto } from '../../model/dtos/formation-dto';
import { FormationDtoMapper } from '../../mappers/dtos/formation-dto-mapper';

export class FormationsHttpService extends HttpService {
  constructor(configService: ConfigService) {
    super(configService, '/formations');
  }

  findAll(): Promise<FormationDto[]> {
    return this.httpGet('', FormationDtoMapper.fromFormationJsons);
  }
}
