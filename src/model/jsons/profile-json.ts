/**
 * Object corresponding to deserialized JSON coming from the backend
 */
export interface ProfileJson {
  /**
   * First name
   */
  firstName: string;

  /**
   * Last name
   */
  lastName: string;

  /**
   * Email
   */
  email: string;

  /**
   * Date of birth
   */
  birthDate: number | string;

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
}
