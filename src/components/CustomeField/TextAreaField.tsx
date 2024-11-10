import { Textarea, TextareaProps } from "@chakra-ui/react";
import classNames from "classnames";
import { get } from "lodash";
import { ControllerRenderProps, UseFormStateReturn } from "react-hook-form";

interface ITextAreaFieldProps extends TextareaProps {
  field?: ControllerRenderProps<any, any>;
  formState?: UseFormStateReturn<any>;
  onChangeCustome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customeStyleError?: string;
}

const TextAreaField = (props: ITextAreaFieldProps) => {
  const { onChangeCustome, customeStyleError, field, formState, ...restProps } =
    props;
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
      <Textarea name={name} id={name} value={value} {...restProps} />
      {renderError()}
    </div>
  );
};

export default TextAreaField;
