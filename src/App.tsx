import { useForm } from "react-hook-form";
import "./App.css";
import RHFField from "./components/RHFField";
import CommonButton from "./components/Common/Button";

import TextAreaField from "./components/CustomeField/TextAreaField";
import TableCommon from "./components/Common/Table/Table";

function App() {
  const { handleSubmit, control, getFieldState, formState, watch } = useForm({
    defaultValues: {
      checkbox: true,
      select1: "5",
      checkbox2: true,
      checkbox3: false,
      checkbox4: false,
      InputNumber: 123,
    },
  });

  const onSubmitForm = (value: any) => {
    console.log(value);
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "3",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "4",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "5",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      id: "name",
      customeClassCell: "text-red-500",
      render: (data: any, index: number) => {
        return <div className="text-red-950">{data.name}</div>;
      },
    },
    {
      title: "Age",
      id: "age",
    },
    {
      title: "Address",
      id: "address",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="w-full h-screen">
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <RHFField
        control={control}
        component={TextAreaField}
        name="InputNumber"
      />
      {/* <RHFField
        control={control}
        name="select1"
        component={SelectField}
        optionData={optionDatas}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <RHFField
            control={control}
            name="select2"
            component={SelectField}
            optionData={optionDatas}
          />
          <RHFField
            control={control}
            name="select3"
            component={SelectField}
            optionData={optionDatas}
          />
          <RHFField
            control={control}
            name="select4"
            component={SelectField}
            optionData={optionDatas}
          />
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      <TableCommon
        columns={columns}
        data={dataSource}
        page={1}
        pageSize={10}
        onClickRow={(row, number) => {
          //   console.log(row, number);
        }}
        isSelect
      />
      <CommonButton type="submit">Submit</CommonButton>
    </form>
  );
}

export default App;
