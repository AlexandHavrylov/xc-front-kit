import { IThemeNamespace, ITheme } from '@xcritical/theme';


interface IPadding{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

interface IBorder {
  width?: string;
  color?: string;
  style?: string;
}

interface IFont {
  size?: string;
  weight?: string;
  color?: string;
}

interface ICell {
  borderRight?: IBorder;
  padding?: IPadding;
  font?: IFont;
}

interface IHead {
  font: IFont;
  padding: IPadding;
  backgroundColor: string;
  hoverColor: string;
}

export interface ITableTheme extends ITheme {
  width?: string;
  tableHeight?: string;
  headBorderBottom?: IBorder;
  rowColor?: string;
  evenRowColor?: string;
  activeRowColor?: string;
  headerBackgroundColor?: string;
  headerHoverColor?: string;
  cell?: ICell;
  head?: IHead;
}


export interface IColumn {
  title: string;
  width: number;
  order: number;
  render: Function | null;
  field: string;
}

export interface ITable {
  rows: object[];
  columns: IColumn[];
  theme?: IThemeNamespace;
}


export interface ITableProps {
  rows: object[];
  columns: IColumn[];
  theme?: IThemeNamespace;
}

export interface IRow {
  row: IRowData;
  isSelected: boolean;
  rowId: number;
  onChangeActiveRow: Function;
  columns: object[];
  theme: ITableTheme;
  level: number;
}

export interface IStyledCell {
  width: number;
  theme: ICell;
}

export interface IStyledHead {
  width: number;
  theme: IHead;
}

export interface IStyledRow {
  isSelected: boolean;
  theme: ITableTheme;
}

export interface IHeader {
  columnName: string;
  width: number;
  theme: ITableTheme;
}

export interface IHeaderPros {
  columnName: string;
  width: number;
  theme: ITableTheme;
}

export interface IRowData {
  id: number;
  children?: object[];
  [key: string]: string | number | boolean | undefined | number[] | null | object;
}
