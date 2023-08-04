export class ArrayUtils {
  /**
   * https://stackoverflow.com/a/46700791
   */
  static notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return !!value;
  }
}
