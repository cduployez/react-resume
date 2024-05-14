import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeEnum } from '../model/enums/theme.enum';

const defaultTheme: ThemeEnum = ThemeEnum.LIGHT;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme]: [
    ThemeEnum,
    React.Dispatch<React.SetStateAction<ThemeEnum>>
  ] = useState(defaultTheme as ThemeEnum);

  useEffect(() => {
    Object.values(ThemeEnum).forEach((t: ThemeEnum): void => {
      document.body.classList.remove(t);
    });
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
