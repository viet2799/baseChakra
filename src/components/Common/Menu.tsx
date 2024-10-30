import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  MenuListProps,
  MenuProps,
} from "@chakra-ui/react";

interface IMenuBtnCustome extends MenuProps {
  titleMenu?: string;
}

interface IMenuItemCustome extends MenuItemProps {
  titleItem?: string;
}

interface IMenuCustome {
  MenuBtn: IMenuBtnCustome;
  MenuItems?: IMenuItemCustome[];
  IMenuLists?: MenuListProps;
}

const MenuCustome = (props: IMenuCustome) => {
  const { MenuBtn, MenuItems, IMenuLists } = props;
  const { titleMenu, ...restPropMenuBtn } = MenuBtn;

  return (
    <Menu>
      <MenuButton {...restPropMenuBtn}>{titleMenu}</MenuButton>
      <MenuList {...IMenuLists}>
        {MenuItems?.map(
          (
            { titleItem = "", ...restPropsItem }: IMenuItemCustome,
            index: number
          ) => {
            return (
              <MenuItem {...restPropsItem} key={index}>
                {titleItem}
              </MenuItem>
            );
          }
        )}
      </MenuList>
    </Menu>
  );
};

export default MenuCustome;
