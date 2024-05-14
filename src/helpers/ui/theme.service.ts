import { ThemeEnum } from '../../model/enums/theme.enum';
import { ThemeEnumUtils } from '../../utils/theme-enum-utils';
import { SessionStorageService } from '../data/session-storage.service';

const THEMES: ThemeEnum[] = [ThemeEnum.LIGHT, ThemeEnum.DARK];

export class ThemeService {
  private set theme(theme: ThemeEnum) {
    theme = theme ? theme : ThemeEnumUtils.defaultTheme();
    this.sessionStorageService.theme = theme;
  }

  constructor(private sessionStorageService: SessionStorageService) {}

  initTheme(theme: ThemeEnum | null): ThemeEnum {
    return (
      theme || this.sessionStorageService.theme || ThemeEnumUtils.defaultTheme()
    );
  }

  nextTheme(theme: ThemeEnum): ThemeEnum {
    const currentIndex: number = THEMES.indexOf(theme);
    const newTheme: ThemeEnum = THEMES[(currentIndex + 1) % THEMES.length];
    this.sessionStorageService.theme = newTheme;
    return newTheme;
  }
}
