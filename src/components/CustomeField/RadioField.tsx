import {
    Radio,
    RadioGroup,
    RadioProps,
    RadioGroupProps,
  } from "@chakra-ui/react";
  import classNames from "classnames";
  import { get } from "lodash";
  import { ControllerRenderProps, UseFormStateReturn } from "react-hook-form";
  
  interface IOptionData {
    label?: string;
    valueRadio: string | number;
    typeRadio?: RadioProps;
  }
  
  interface IRadioFieldProps extends RadioGroupProps {
    isGroup?: boolean;
    label?: string;
    field?: ControllerRenderProps<any, any>;
    formState?: UseFormStateReturn<any>;
    onChangeCustome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    customeStyleError?: string;
    isGroupRadio?: boolean;
    optionData?: IOptionData[];
  }
  const GroupRadioField = ({
    field,
    formState,
    customeStyleError,
    optionData,
    ...restProps
  }: IRadioFieldProps) => {
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
  
    const renderRadioField = (item: IOptionData) => {
      const { valueRadio, label, typeRadio } = item;
      const { ...restPropsRadio } = typeRadio || {};
  
      return (
        <Radio {...restPropsRadio} value={valueRadio}>
          {label}
        </Radio>
      );
    };
  
    return (
      <div>
        <RadioGroup {...restProps} onChange={onChange}>
          {optionData?.map((item: IOptionData) => renderRadioField(item))}
        </RadioGroup>
        {renderError()}
      </div>
    );
  };
  
  export default GroupRadioField;
  