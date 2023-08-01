export class StyleVariables {

    static readonly instance: StyleVariables = new StyleVariables();

    readonly fontFamily: string = 'Gudea, \'Helvetica Neue\', sans-serif';
    readonly titleDelimiter: string = '>';
    readonly transitionDelay: string = '0.3s';
    readonly tabletWidth: string = '1023px';
    readonly phoneWidth: string = '767px';
}