export class DateUtils {
  static fromYear(year: number): Date {
    return new Date(year, 0, 1, 0, 0, 0, 0);
  }

  /**
   * Source : https://stackoverflow.com/a/21984136
   * @param birthday Date d'anniversaire
   */
  static toAge(birthday: Date): number {
    const dateDiff: number = Date.now() - birthday.getTime();
    const ageDate: Date = new Date(dateDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  static fromDate(day: number, month: number, year: number): Date {
    return new Date(year, month - 1, day, 0, 0, 0, 0);
  }

  static fromDateJson(
    formattedDate: number | string | undefined | null
  ): Date | null {
    if (!formattedDate) {
      return null;
    }
    const date: Date = new Date(formattedDate);
    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );
  }

  static fromMandatoryDateJson(
    formattedDate: number | string | undefined | null
  ): Date {
    const date: Date | null = DateUtils.fromDateJson(formattedDate);
    if (!date) {
      throw Error('Date is undefined');
    }
    return date;
  }

  static fromDateTimeJson(
    date: number | string | undefined | null
  ): Date | null {
    return date ? new Date(date) : null;
  }

  static sortByDateDesc<T>(array: T[], dateGetter: (t: T) => Date): T[] {
    return array.sort(
      (a: T, b: T) => dateGetter(b).getTime() - dateGetter(a).getTime()
    );
  }
}
