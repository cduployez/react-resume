import {LanguageDto} from '../../model/dtos/language-dto';
import {LanguageDtoMapper} from '../../mappers/dtos/language-dto-mapper';
import {ConfigService} from '../config/config-service';
import {HttpService} from './http-service';

/**
 * HTTP service for languages
 */
export class LanguagesHttpService extends HttpService {
    constructor(configService: ConfigService) {
        super(configService, '/languages');
    }

    findAll(): Promise<LanguageDto[]> {
        return this.httpGet('', LanguageDtoMapper.fromLanguageJsons);
    }
}
