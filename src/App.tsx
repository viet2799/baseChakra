import { Controller, useForm } from "react-hook-form";
import "./App.css";
import RHFField from "./components/RHFField";
import CommonButton from "./components/Common/Button";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import SelectField from "./components/CustomeField/SelectField";
import TableCommon from "./components/Common/Table";
import InputField from "./components/CustomeField/InputField";
import TextAreaField from "./components/CustomeField/TextAreaField";

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

  const optionDatas = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
    { value: "5", label: "Option 5" },
  ];
  //   const { isOpen, onOpen, onClose } = useDisclosure();
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
      <CommonButton type="submit">Submit</CommonButton>
    </form>
  );
}

export default App;
