import { Controller, useForm } from "react-hook-form";
import "./App.css";
import RHFField from "./components/RHFField";
import CheckboxField from "./components/CustomeField/CheckboxField";
import CommonButton from "./components/Common/Button";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import CustomCheckboxGroup from "./components/CustomeField/ListCheckBoxField";
import RadioField from "./components/CustomeField/RadioField";

function App() {
  const {
    handleSubmit,
    control,
    formState: { isDirty, submitCount },
    getFieldState,
    formState,
    watch,
  } = useForm({
    defaultValues: {
      checkbox: true,
      checkbox1: "5",
      checkbox2: true,
      checkbox3: false,
    },
  });

  const onSubmitForm = (value: any) => {
    console.log(value);
  };


  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="w-full h-screen">
      <Checkbox checked={true}>aaa</Checkbox>
      <RHFField
        control={control}
        name="checkbox"
        component={CheckboxField}
        children={<div className="w-20 h-20 bg-red-500">Checkbox</div>}
      />
      <RHFField
        control={control}
        name="checkbox1"
        component={RadioField}
        children={<div className="w-20 h-20 bg-red-500">Checkbox</div>}
      />
      <RHFField
        control={control}
        name="checkbox2"
        component={CheckboxField}
        children={<div className="w-20 h-20 bg-red-500">Checkbox</div>}
      />
      <CommonButton type="submit">
        Submit
      </CommonButton>
    </form>
  );
}

export default App;
