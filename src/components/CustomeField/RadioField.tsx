import { Radio, RadioGroup, RadioProps } from "@chakra-ui/react";
import classNames from "classnames";
import { get } from "lodash";
import { ControllerRenderProps, UseFormStateReturn } from "react-hook-form";

interface IRadioFieldProps extends RadioProps {
  isGroup?: boolean;
  children?: React.ReactNode;
  label?: string;
  field?: ControllerRenderProps<any, any>;
  formState?: UseFormStateReturn<any>;
  onChangeCustome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customeStyleError?: string;
}
const RadioField = ({
  field,
  formState,
  customeStyleError,
  isGroup,
  label,
  ...restProps
}: IRadioFieldProps) => {
  const { name, onChange } = field || {};
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
      <Radio {...restProps} id={name} name={name} />
      {label}
      {renderError()}
    </div>
  );
};

export default RadioField;
