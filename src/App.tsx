import { useForm } from "react-hook-form";
import "./App.css";
import RHFField from "./components/RHFField";
import CheckboxField from "./components/CustomeField/CheckboxField";
import CommonButton from "./components/Common/Button";
import { Checkbox } from "@chakra-ui/react";

function App() {
  const {
    handleSubmit,
    control,
    formState: { isDirty, submitCount },
    getFieldState,
    watch,
  } = useForm({
    defaultValues: {
      checkbox: true,
      checkbox1: false,
      checkbox2: true,
      checkbox3: false,
    },
  });

  const valueForm = watch();
  console.log("valueForm", valueForm);
  const onSubmitForm = (value: any) => {
    console.log(value);
    console.log(getFieldState("checkbox"));
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
        component={CheckboxField}
        children={<div className="w-20 h-20 bg-red-500">Checkbox</div>}
      />
      <RHFField
        control={control}
        name="checkbox2"
        component={CheckboxField}
        children={<div className="w-20 h-20 bg-red-500">Checkbox</div>}
      />
      <RHFField
        control={control}
        name="checkbox3"
        component={CheckboxField}
        children={<div className="w-20 h-20 bg-red-500">Checkbox</div>}
      />
      <CommonButton type="submit" disabled={submitCount === 2}>
        Submit
      </CommonButton>
    </form>
  );
}

export default App;
