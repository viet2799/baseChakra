import {
  Button,
  ButtonGroup,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import reactLogo from './assets/react.svg'
import './App.css'

interface IButton extends ButtonProps {
  isGroup?: boolean;
  children?: React.ReactNode | string;
  isIconBtn?: boolean;
  optionBtn?: IButton[];
  gap?: number;
}

interface IIconBtn extends IconButtonProps {
  children?: React.ReactNode | string;
}

const IconBtn = (props: IIconBtn) => {
  const { ...restProps } = props;
  return <IconButton {...restProps} />;
};

const CommonButton = (props: IButton) => {
  const {
    children,
    isGroup,
    optionBtn,
    gap = 2,
    isIconBtn,
    size = "xs",
    ...restProps
  } = props;
  if (isGroup) {
    return (
      <ButtonGroup gap={gap}>
        {optionBtn?.map((btn) => {
          return (
            <Button size={btn?.size} {...btn}>
              {btn.children}
            </Button>
          );
        })}
      </ButtonGroup>
    );
  }
  if (isIconBtn) {
    return <IconBtn icon={<SearchIcon />} />;
  }
  return (
    <Button size={size} {...restProps}>
      {children}
    </Button>
  );
};

export default CommonButton;
