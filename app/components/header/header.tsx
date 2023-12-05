import { selectMainState } from "src/redux/reducers/main/mainReducer";
import { useAppSelector } from "src/redux/reduxHook";

export default function Header() {
  const menuList = useAppSelector(selectMainState).menuList;

  return (
    <header className="z-20 fixed top-0 w-full bg-gradient-to-b pb-4 from-gray-300/90 via-gray-300/90 dark:from-gray-800/90 dark:via-gray-800/90 to-transparent">
      <div className="flex justify-between items-center p-1 px-4">
        <div className="text-white dark:text-black font-bold text-lg">
          BARO FACTORY
        </div>
        <div className="text-white dark:text-black ml-4">Login</div>
      </div>
    </header>
  );
}
