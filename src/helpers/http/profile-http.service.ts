import {HttpService} from './http-service';
import {ProfileDtoMapper} from '../../mappers/dtos/profile-dto-mapper';
import {ProfileDto} from '../../model/dtos/profile-dto';
import {ConfigService} from '../config/config-service';

export class ProfileHttpService extends HttpService {
    constructor(configService: ConfigService) {
        super(configService, '/profile');
    }

    get(): Promise<ProfileDto> {
        return this.httpGet('', ProfileDtoMapper.fromProfileJson);
    }
}
