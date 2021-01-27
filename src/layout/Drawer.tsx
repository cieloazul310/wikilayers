import * as React from 'react';
import Button from '@material-ui/core/Button';
import { useToggleDarkMode } from '../utils/DispatchContext';

interface Props {
  toggleDrawer: () => void;
}

function AppDrawer({ toggleDrawer }: Props) {
  const _toggleDarkMode = useToggleDarkMode();
  return (
    <div>
      <Button onClick={toggleDrawer}>Hide Drawer</Button>
      <Button onClick={_toggleDarkMode}>Dark</Button>
    </div>
  );
}

export default AppDrawer;
