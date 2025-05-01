import { theme } from "./theme";

export const media = {
    mobilesm: `@media (max-width: ${theme.breakpoints.sm})`,
    tabletmd: `@media (max-width: ${theme.breakpoints.md})`,
    laptoplg: `@media (max-width: ${theme.breakpoints.lg})`,
    desktopxl: `@media (max-width: ${theme.breakpoints.xl})`,
    desktopxxl: `@media (max-width: ${theme.breakpoints.xxl})`,
  };