import {HttpService} from './http-service';
import {ProfileDtoMapper} from '../../mappers/dtos/profile-dto-mapper';
import {ProfileDto} from '../../model/dtos/profile-dto';

export class ProfileHttpService extends HttpService {
    constructor() {
        super('/profile');
    }

    get(): Promise<ProfileDto> {
        return this.httpGet('', ProfileDtoMapper.fromProfileJson);
    }
}
