export class HobbyDto {
  title: string;

  ellipsis: boolean;

  constructor(title: string, values: string[], ellipsis: boolean) {
    this.title = title;
    this.ellipsis = ellipsis;
    this._values = values;
    this._valuesFormat = this._values.join(', ');
  }

  private _values: string[];

  get values(): string[] {
    return this._values;
  }

  set values(value: string[]) {
    this._values = value;
    this._valuesFormat = this.formatValues();
  }

  private _valuesFormat: string;

  get valuesFormat(): string {
    return this._valuesFormat;
  }

  private formatValues(): string {
    return this._values.join(', ');
  }
}
