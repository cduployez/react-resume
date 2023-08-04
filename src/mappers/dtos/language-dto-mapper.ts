import {LanguageJson} from '../../model/jsons/language-json';
import {LanguageDto} from '../../model/dtos/language-dto';
import {DateRangeDtoMapper} from './date-range-dto-mapper';

export class LanguageDtoMapper {
    static fromLanguageJson(json: LanguageJson): LanguageDto {
        return new LanguageDto(
            DateRangeDtoMapper.fromDateRangeJson(json.dateRange),
            json.title,
            json.descriptions
        );
    }

    static fromLanguageJsons(jsons: LanguageJson[]): LanguageDto[] {
        return jsons.map(LanguageDtoMapper.fromLanguageJson);
    }
}
