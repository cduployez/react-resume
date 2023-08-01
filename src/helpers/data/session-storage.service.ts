import {ThemeEnum} from '../../model/enums/theme.enum';

const KEY_MENU_BAR_MINIMIZED = 'menuBarMinimized';
const KEY_THEME = 'theme';

export class SessionStorageService {
    constructor() {
        this._menuBarMinimized =
            sessionStorage[KEY_MENU_BAR_MINIMIZED] === 'true' || false;
        this._theme = sessionStorage[KEY_THEME];
    }

    private _menuBarMinimized = false;

    get menuBarMinimized(): boolean {
        return this._menuBarMinimized;
    }

    set menuBarMinimized(minimized: boolean) {
        this._menuBarMinimized = minimized;
        sessionStorage[KEY_MENU_BAR_MINIMIZED] = minimized;
    }

    private _theme: ThemeEnum;

    get theme(): ThemeEnum {
        return this._theme;
    }

    set theme(theme: ThemeEnum) {
        this._theme = theme;
        sessionStorage[KEY_THEME] = theme;
    }
}
