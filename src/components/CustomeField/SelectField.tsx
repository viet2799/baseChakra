import { Select, SelectProps } from "@chakra-ui/react";
import classNames from "classnames";
import { get } from "lodash";
import React from "react";
import { ControllerRenderProps, UseFormStateReturn } from "react-hook-form";

interface IOptionData {
  value?: string | number;
  label?: string | number;
}

interface ISelectFieldProps extends SelectProps {
  optionData?: IOptionData[];
  field?: ControllerRenderProps<any, any>;
  formState?: UseFormStateReturn<any>;
  onChangeCustome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customeStyleError?: string;
}

const SelectField = (props: ISelectFieldProps) => {
  const {
    optionData,
    field,
    formState,
    onChangeCustome,
    customeStyleError,
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

  const onChangeSelect = (e: any) => {
    if (onChangeCustome) {
      onChangeCustome(e);
      return;
    }
    if (onChange) {
      onChange(e);
      return;
    }
  };

  return (
    <div>
      <Select {...restProps} value={value} onChange={onChangeSelect}>
        {optionData?.map((option: IOptionData, index: number) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {renderError()}
    </div>
  );
};

export default React.memo(SelectField);
