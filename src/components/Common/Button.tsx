import {
  Button,
  ButtonGroup,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";

interface IButton extends ButtonProps, Omit<IconButtonProps, "aria-label"> {
  isGroup?: boolean;
  children?: React.ReactNode | string;
  isIconBtn?: boolean;
  optionBtn?: IButton[];
  gap?: number;
}

const CommonButton = (props: IButton) => {
  const {
    children,
    isGroup,
    optionBtn,
    gap = 2,
    size = "xs",
    isIconBtn,
    icon,
    ...restProps
  } = props;

  if (isGroup) {
    return (
      <ButtonGroup gap={gap}>
        {optionBtn?.map((btn) => {
          return <Button {...btn}>{btn.children}</Button>;
        })}
      </ButtonGroup>
    );
  }
  if (isIconBtn) {
    return <IconButton aria-label="" icon={icon} {...restProps} />;
  }
  return (
    <Button size={size} {...restProps}>
      {children}
    </Button>
  );
};

export default CommonButton;
