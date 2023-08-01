import {HttpService} from './http-service';
import {ConfigService} from '../config/config-service';
import {ExperienceDtoMapper} from '../../mappers/dtos/experience-dto-mapper';
import {ExperienceDto} from '../../model/dtos/experience-dto';

export class ExperiencesHttpService extends HttpService {
    constructor(configService: ConfigService) {
        super(configService, '/experiences');
    }

    findAll(): Promise<ExperienceDto[]> {
        return this.httpGet('', ExperienceDtoMapper.fromExperienceJsons);
    }
}
