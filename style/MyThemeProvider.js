import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import p from 'prop-types'

export const MyThemeProvier = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

MyThemeProvier.props ={
    children: p.node.isRequired
};
