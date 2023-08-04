import { HobbyDto } from '../../model/dtos/hobby-dto';
import { HobbyJson } from '../../model/jsons/hobby-json';

export class HobbyDtoMapper {
  static fromHobbyJson(json: HobbyJson): HobbyDto {
    return new HobbyDto(json.title, json.values, json.ellipsis);
  }

  static fromHobbyJsons(jsons: HobbyJson[]): HobbyDto[] {
    return jsons.map(HobbyDtoMapper.fromHobbyJson);
  }
}
