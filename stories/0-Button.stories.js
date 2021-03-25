import React from 'react';

import Button from '../components/button';
import MenuButton from '../components/menu-button';

export default {
  title: 'Buttons'
};

export const Normal = () => <Button> Save </Button>

export const Menu = () => <MenuButton> Save </MenuButton>