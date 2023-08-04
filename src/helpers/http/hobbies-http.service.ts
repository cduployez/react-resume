import {HobbyDtoMapper} from '../../mappers/dtos/hobby-dto-mapper';
import {HobbyDto} from '../../model/dtos/hobby-dto';
import {ConfigService} from '../config/config-service';
import {HttpService} from './http-service';

/**
 * HTTP service for languages
 */
export class HobbiesHttpService extends HttpService {
    constructor(configService: ConfigService) {
        super(configService, '/hobbies');
    }

    findAll(): Promise<HobbyDto[]> {
        return this.httpGet('', HobbyDtoMapper.fromHobbyJsons);
    }
}
