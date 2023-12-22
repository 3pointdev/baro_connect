import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Linker from "components/divisions/linker/linker";
import { NextRouter } from "next/router";
import MenuModel from "src/models/main/menu.model";
import { selectMainState } from "src/redux/reducers/main/mainReducer";
import { useAppSelector } from "src/redux/reduxHook";

export default function Footer({ router }: { router: NextRouter }) {
  const menu = useAppSelector(selectMainState).menuList;

  return (
    <footer className="w-full h-16 fixed bottom-0 text-bg-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white flex">
      {menu.map((menuItem: MenuModel) => {
        const active = router.pathname === menuItem.url;

        return (
          <Linker
            className={`w-full h-full ${
              active ? "text-blue-400" : ""
            } flex items-center justify-center`}
            key={`menu_${menuItem.title}`}
            href={menuItem.url}
          >
            <FontAwesomeIcon icon={menuItem.icon} size="xl" />
          </Linker>
        );
      })}
    </footer>
  );
}
