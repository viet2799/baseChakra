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

interface IHeaderTablePRops<T> extends TableHeadProps {}

interface ITableCommonProps {
  columns: any[];
  data: any[];
}

const TableCommon = (props: ITableCommonProps) => {
  const { columns, data } = props;
  return (
    <div>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th>To convert</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
};

export default TableCommon;
