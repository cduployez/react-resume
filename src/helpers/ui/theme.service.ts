import {SessionStorageService} from '../data/session-storage.service';
import {ThemeEnumUtils} from '../../utils/theme-enum-utils';
import {ThemeEnum} from '../../model/enums/theme.enum';

const THEMES: ThemeEnum[] = [ThemeEnum.LIGHT, ThemeEnum.DARK];

export class ThemeService {
    constructor(private sessionStorageService: SessionStorageService) {
        this._theme = sessionStorageService.theme;
        if (!this._theme) {
            this.theme = ThemeEnumUtils.defaultTheme();
        }
    }

    private _theme: ThemeEnum;

    get theme(): ThemeEnum {
        return this._theme;
    }

    set theme(theme: ThemeEnum) {
        theme = theme ? theme : ThemeEnumUtils.defaultTheme();
        const previousTheme: ThemeEnum | null = this._theme;
        this._theme = theme;
        this.sessionStorageService.theme = theme;
        this.updateBodyTheme({previousTheme, currentTheme: theme});
    }

    nextTheme(): ThemeEnum {
        const currentIndex = THEMES.indexOf(this.theme);
        this.theme = THEMES[(currentIndex + 1) % THEMES.length];
        return this.theme;
    }

    private updateBodyTheme(themeChange: { previousTheme: ThemeEnum | null, currentTheme: ThemeEnum }): void {
        if (themeChange.previousTheme) {
            document.body.classList.remove(themeChange.previousTheme);
        }
        document.body.classList.add(themeChange.currentTheme);
    }
}