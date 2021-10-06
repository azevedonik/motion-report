import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { FunctionComponent } from 'react';
import { useHistory } from 'react-router';
import { useAppSelector } from '../hooks';

const drawerWidth = 240;
interface MenuItem {
  text: string;
  icon: any;
  path: string;
}

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const history = useHistory();
  const authState = useAppSelector((state) => state.auth);

  const menuItems: MenuItem[] = [
    {
      text: 'Pacientes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Criar Paciente',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create',
    },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      {authState.isAuth && (
        <Drawer
          variant='permanent'
          anchor='left'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Divider />
          <List>
            {menuItems.map((item) => {
              return (
                <ListItem button key={item.text} onClick={() => history.push(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}

      <Box
        component='main'
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
