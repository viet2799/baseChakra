import * as React from "react";
import { Control, Controller } from "react-hook-form";

// Lấy ra kiểu dữ liệu của props cho Component tự động
type ComponentPropsType<TComponent> = TComponent extends React.ComponentType<
  infer P
>
  ? P
  : never;

type Props<TComponent extends React.ComponentType<any>> = {
  control: Control<any, any>;
  name: string;
  component: TComponent;
} & Omit<
  ComponentPropsType<TComponent>,
  "control" | "name" | "formState" | "field" | "fieldState"
>;

class RHFField<
  TComponent extends React.ComponentType<any>,
> extends React.PureComponent<Props<TComponent>> {
  render() {
    const { name, component: Component, control, ...rest } = this.props;
    return (
      <Controller
        control={control}
        name={name}
        render={({ field, formState }) => (
          <Component field={field} formState={formState} {...rest} />
        )}
      />
    );
  }
}

export default RHFField;
