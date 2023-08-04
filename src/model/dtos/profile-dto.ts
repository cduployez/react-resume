import { DateUtils } from '../../utils/date-utils';

export class ProfileDto {
  /**
   * Email
   */
  email: string;
  /**
   * Living city
   */
  city: string;
  /**
   * Means of transport
   */
  meansOfTransport: string[];
  /**
   * Goals
   */
  goals: string[];
  /**
   * Title of the current position
   */
  position: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    birthDate: Date,
    city: string,
    meansOfTransport: string[],
    goals: string[],
    position: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullName = this.toFullName(firstName, lastName);
    this.email = email;
    this._birthDate = birthDate;
    this._age = this.toAge(birthDate);
    this.city = city;
    this.meansOfTransport = meansOfTransport;
    this.goals = goals;
    this.position = position;
  }

  /**
   * Date of birth
   */
  private _birthDate: Date;

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }

  /**
   * Age
   */
  private _age: number;

  get age(): number {
    return this._age;
  }

  /**
   * Full name
   */
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  /**
   * First name
   */
  private _firstName: string;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
    this._fullName = this.toFullName(value, this.lastName);
  }

  /**
   * Last name
   */
  private _lastName: string;

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
    this._fullName = this.toFullName(this.firstName, value);
  }

  private toFullName(
    firstName: string | undefined,
    lastName: string | undefined
  ): string {
    return `${firstName || ''} ${(lastName || '').toUpperCase()}`.trim();
  }

  private toAge(birthDate: Date): number {
    return DateUtils.toAge(birthDate);
  }
}
