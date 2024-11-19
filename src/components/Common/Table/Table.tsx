import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  TableHeadProps,
} from "@chakra-ui/react";
import classNames from "classnames";
import CheckboxField from "../../CustomeField/CheckboxField";
import Pagingnation from "./Components/Pagingnation";

interface IHeaderTablePRops<T> {
  title: string | React.ReactNode;
  id: number | string;
  render?: (data?: T, index?: number) => React.ReactElement;
  customeClassCell?: string;
}

interface ITableCommonProps<T> {
  columns: IHeaderTablePRops<T>[];
  data: T[];
  isTfoot?: boolean;
  noHeader?: boolean;
  isTableCaption?: boolean;
  dataCaption?: React.ReactNode;
  isSelect?: boolean;
  onClickRow?: (row: T, index: number) => void;
  onCheckBoxRow?: (row: T, index: number) => void;
  customeClassRow?: string;
  customeClassTable?: string;
  footerLayout?: React.ReactNode;
  page?: number;
  pageSize?: number;
  totalRecord?: number;
}

function TableCommon<T>(props: ITableCommonProps<T>) {
  const {
    columns,
    isTfoot,
    isTableCaption,
    dataCaption,
    isSelect,
    noHeader,
    data,
    customeClassRow,
    customeClassTable,
    onCheckBoxRow,
    onClickRow,
    footerLayout,
  } = props;

  const renderCellContent = (
    row: T,
    index: number,
    column: IHeaderTablePRops<T>
  ) => {
    const content = column?.render?.(row, index) || row?.[column?.id];
    return content;
  };

  const handleClickRow = (row: T, index: number) => {
    if (onClickRow) {
      onClickRow(row, index);
    }
  };

  const handleClickCheckBoxRow = (row: T, inden: number) => {
    if (onCheckBoxRow) {
      onCheckBoxRow(row, inden);
    }
  };

  const handleSelectAll = () => {};

  return (
    <div>
      <Table className={classNames("", customeClassTable)}>
        {isTableCaption && <TableCaption>{dataCaption}</TableCaption>}
        {!noHeader && (
          <Thead>
            <Tr>
              {isSelect && (
                <Th>
                  <CheckboxField onChangeCustome={handleSelectAll} />
                </Th>
              )}
              {columns.map((column) => (
                <Th>{column?.title}</Th>
              ))}
            </Tr>
          </Thead>
        )}
        <Tbody>
          {data?.map((row, indexData) => (
            <Tr
              className={classNames("", customeClassRow)}
              onClick={() => {
                handleClickRow(row, indexData);
              }}
            >
              {isSelect && (
                <Td>
                  <CheckboxField
                    onChangeCustome={() => {
                      handleClickCheckBoxRow(row, indexData);
                    }}
                  />
                </Td>
              )}
              {columns.map((column, indeCol) => {
                return (
                  <Td className={classNames("", column.customeClassCell)}>
                    {renderCellContent(row, indexData, column)}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
        {isTfoot && footerLayout}
      </Table>
      {/* // pagingation */}
      <Pagingnation />
    </div>
  );
}

export default TableCommon;
