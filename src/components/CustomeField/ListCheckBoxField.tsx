import { CheckboxGroup, CheckboxGroupProps } from "@chakra-ui/react";

interface IListCheckBoxField extends CheckboxGroupProps {
}

const ListCheckBoxField = (props: IListCheckBoxField) => {
  const { ...restProps } = props;
  return <CheckboxGroup {...restProps}>

  </CheckboxGroup>;
};

export default ListCheckBoxField;
