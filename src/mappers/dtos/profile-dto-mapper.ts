import { ProfileJson } from '../../model/jsons/profile-json';
import { DateUtils } from '../../utils/date-utils';
import { ProfileDto } from '../../model/dtos/profile-dto';

export class ProfileDtoMapper {
  static fromProfileJson(json: ProfileJson): ProfileDto {
    return new ProfileDto(
      json.firstName,
      json.lastName,
      json.email,
      DateUtils.fromMandatoryDateJson(json.birthDate),
      json.city,
      json.meansOfTransport,
      json.goals,
      json.position
    );
  }
}
