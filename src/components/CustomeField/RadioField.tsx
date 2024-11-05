import { Radio, RadioGroup, RadioProps } from "@chakra-ui/react";
import classNames from "classnames";
import { get } from "lodash";
import { ControllerRenderProps, UseFormStateReturn } from "react-hook-form";

interface IOptionData {
  label?: string;
  value: string | number;
}

interface IRadioFieldProps extends RadioProps {
  isGroup?: boolean;
  children?: React.ReactNode;
  label?: string;
  field?: ControllerRenderProps<any, any>;
  formState?: UseFormStateReturn<any>;
  onChangeCustome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customeStyleError?: string;
  isGroupRadio?: boolean;
  optionData?: IOptionData[];
}
const RadioField = ({
  field,
  formState,
  customeStyleError,
  label,
  isGroupRadio,
  optionData,
  ...restProps
}: IRadioFieldProps) => {
  const { name, value } = field || {};
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
    const { value, label } = item;
    return (
      <Radio {...restProps} value={value}>
        {label}
      </Radio>
    );
  };

  return (
    <div>
      <RadioGroup>
        {optionData?.map((item, index) => renderRadioField(item))}
      </RadioGroup>
      <Radio {...restProps} id={name} name={name} value={value} />
      {label}
      {renderError()}
    </div>
  );
};

export default RadioField;
