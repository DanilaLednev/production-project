import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

import { useJsonSettings } from '@/entities/User/model/selectors/jsonSettings';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';



interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }

  }, [isThemeInited, defaultTheme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
