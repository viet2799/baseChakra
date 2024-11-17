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

interface IHeaderTablePRops<T> {
  title: string | React.ReactNode;
  id: number | string;
  render?: (data?: T, index?: number) => React.ReactElement;
}

interface ITableCommonProps<T> {
  columns: IHeaderTablePRops<T>[];
  data: T[];
  isTfoot?: boolean;
  isHeader?: boolean;
  isTableCaption?: boolean;
  dataCaption?: React.ReactNode;
  isSelect?: boolean;
}

function TableCommon<T>(props: ITableCommonProps<T>) {
  const {
    columns,
    isTfoot,
    isTableCaption,
    dataCaption,
    isSelect,
    isHeader,
    data,
  } = props;

  const renderCellContent = (
    row: T,
    index: number,
    column: IHeaderTablePRops<T>
  ) => {
    const content = column?.render?.(row, index) || row[column.id];
    return <div>{content}</div>;
  };

  return (
    <div>
      <Table variant="simple">
        {isTableCaption && <TableCaption>{dataCaption}</TableCaption>}
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th>{column?.title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row, indexData) => (
            <Tr>
              {columns.map((column, indeCol) => (
                <Td>{renderCellContent(row, indexData, column)}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        {isTfoot && (
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        )}
      </Table>
      {/* // pagingation */}
    </div>
  );
}

export default TableCommon;
