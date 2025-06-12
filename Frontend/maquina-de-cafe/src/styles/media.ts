import { theme } from "./theme";

export const media = {

    //Lagura
    mobilesm: `@media (max-width: ${theme.breakpoints.sm})`,
    tabletmd: `@media (max-width: ${theme.breakpoints.md})`,
    laptoplg: `@media (max-width: ${theme.breakpoints.lg})`,
    desktopxl: `@media (max-width: ${theme.breakpoints.xl})`,
    desktopxxl: `@media (max-width: ${theme.breakpoints.xxl})`,

    //Altura
    tabletmdheight: `@media (max-height: ${theme.breakpoints.heightmd})`,
    laptoplgheight: `@media (max-height: ${theme.breakpoints.rightlg})`,
  };