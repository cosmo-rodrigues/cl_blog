import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const MyThemeProvier = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};