import React from 'react';
import { ThemeEnum } from '../model/enums/theme.enum';

export const ThemeContext = React.createContext({
  theme: ThemeEnum.LIGHT,
  setTheme: (theme: ThemeEnum) => {}
});
