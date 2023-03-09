import React from 'react';
import { Bar, Icon } from '@ui5/webcomponents-react';
import './Header.scss';

interface Props {
  title: string;
}

const Header = (props: Props) => {
  return (
    <Bar className="header">
      <Icon name="home" />
      <h1>{props.title}</h1>
    </Bar>
  );
};

export default Header;
