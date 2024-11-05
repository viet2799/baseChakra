import { Checkbox, CheckboxProps } from "@chakra-ui/react";
import classNames from "classnames";
import { get } from "lodash";
import { ControllerRenderProps, UseFormStateReturn } from "react-hook-form";

interface ICheckboxField extends CheckboxProps {
  children?: React.ReactNode | string;
  field?: ControllerRenderProps<any, any>;
  formState?: UseFormStateReturn<any>;
  onChangeCustome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customeStyleError?: string;
  optionCheckbox?: {
    value?: string;
    label?: string;
  };
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
      <div className="flex align-middle justify-center gap-4">
        <Checkbox
          id={name}
          name={name}
          defaultChecked={value}
          onChange={(e) => {
            if (onChangeCustome) {
              onChangeCustome(e);
              return;
            }
            if (onChange) {
              onChange(e);
              return;
            }
          }}
          {...restProps}
        />
        {children}
      </div>
      {renderError()}
    </div>
  );
};

export default CheckboxField;
