import {
  NumberDecrementStepper,
  NumberDecrementStepperProps,
  NumberIncrementStepper,
  NumberIncrementStepperProps,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from "@chakra-ui/react";
import classNames from "classnames";
import { get } from "lodash";
import { ControllerRenderProps, UseFormStateReturn } from "react-hook-form";

interface IInputNumberFieldProps extends NumberInputProps {
  field?: ControllerRenderProps<any, any>;
  formState?: UseFormStateReturn<any>;
  onChangeCustome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customeStyleError?: string;
  isIncrease?: boolean;
  customeNumberIncrementStepper?: NumberIncrementStepperProps;
  customeNumberDecrementStepper?: NumberDecrementStepperProps;
  isMoney?: boolean;
  typeMoney?: string;
}

const NumberField = (props: IInputNumberFieldProps) => {
  const {
    onChangeCustome,
    customeStyleError,
    field,
    formState,
    isIncrease,
    customeNumberIncrementStepper,
    customeNumberDecrementStepper,
    isMoney,
    typeMoney,
    ...restProps
  } = props;
  const { name, value, onChange } = field || {};
  const { touchedFields, errors, isSubmitted } = formState || {};
  const isTouched = get(touchedFields, name!);
  const errorMessage = get(errors, name!)?.message;

  const renderError = () => {
    if (isTouched || isSubmitted) {
      return (
        Boolean(errorMessage) && (
          <div className={classNames("", customeStyleError)}>
            {errorMessage?.toString()}
          </div>
        )
      );
    }
  };

  return (
    <div>
      <NumberInput
        name={name}
        id={name}
        defaultValue={value}
        onChange={onChange}
        {...restProps}
      >
        <NumberInputField />
        {isIncrease && (
          <NumberInputStepper>
            <NumberIncrementStepper {...customeNumberIncrementStepper} />
            <NumberDecrementStepper {...NumberDecrementStepper} />
          </NumberInputStepper>
        )}
      </NumberInput>
      {renderError()}
    </div>
  );
};

export default NumberField;
