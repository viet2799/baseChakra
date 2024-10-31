import { Tooltip, TooltipProps } from "@chakra-ui/react";

interface ITooltipCustome extends TooltipProps {
  chidren?: React.ReactNode;
}
const TooltipCustome = (props: ITooltipCustome) => {
  const { chidren, ...restprops } = props;
  return <Tooltip {...restprops}>{chidren}</Tooltip>;
};

export default TooltipCustome;
