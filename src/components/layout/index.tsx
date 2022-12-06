import React from 'react';
import Row from './Row';
import { RowProps } from './Row/interfaces';
import Column from './Column';
import { ColumnProps } from './Column/interfaces';

interface LayoutComponents {
  Row: React.FC<RowProps>;
  Column: React.FC<ColumnProps>;
};

const Layout: LayoutComponents = (): void => {};

Layout.Row = Row;
Layout.Column = Column;

export default Layout;