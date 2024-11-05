import { Controller, useForm } from "react-hook-form";
import "./App.css";
import RHFField from "./components/RHFField";
import CommonButton from "./components/Common/Button";
import { Select } from "@chakra-ui/react";
import SelectField from "./components/CustomeField/SelectField";

function App() {
  const {
    handleSubmit,
    control,
    getFieldState,
    formState,
    watch,
  } = useForm({
    defaultValues: {
      checkbox: true,
      select1: "5",
      checkbox2: true,
      checkbox3: false,
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

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="w-full h-screen">
      <Select>
        {optionDatas?.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Select>
      <RHFField
        control={control}
        name="select1"
        component={SelectField}
        optionData={optionDatas}
      />
      <CommonButton type="submit">Submit</CommonButton>
    </form>
  );
}

export default App;
