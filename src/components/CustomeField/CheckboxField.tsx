import { Checkbox, CheckboxGroup, CheckboxProps } from "@chakra-ui/react";
import classNames from "classnames";
import { get } from "lodash";
import { ControllerRenderProps, UseFormStateReturn } from "react-hook-form";

interface ICheckboxField extends CheckboxProps {
  children?: React.ReactNode;
  field?: ControllerRenderProps<any, any>;
  formState?: UseFormStateReturn<any>;
  onChangeCustome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customeStyleError?: string;
}

const CheckboxField = (props: ICheckboxField) => {
  const {
    customeStyleError,
    onChangeCustome,
    children,
    field,
    formState,
    ...restProps
  } = props;
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
      <Checkbox
        id={name}
        name={name}
        onChange={(e) => {
          if (onChangeCustome) {
            onChangeCustome(e);
            return;
          }
          onChange && onChange(e);
        }}
        {...restProps}
      >
        {children}
      </Checkbox>
      {renderError()}
    </div>
  );
};

export default CheckboxField;
