import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";

export function useIsMobile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
  return isMobile;
}

