import { selectUserState } from "src/redux/reducers/auth/userReducer";
import { useAppSelector } from "src/redux/reduxHook";
import { PageArticleProps } from "./article.type";

export default function PageArticle({
  children,
  addClass = "",
}: PageArticleProps) {
  const isMobile = useAppSelector(selectUserState).isMobile;
  let styleClass = "";

  if (isMobile) {
    styleClass =
      "text-bg-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white w-screen min-h-screen h-full overflow-hidden ";
  } else {
    styleClass =
      "text-bg-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white overflow-hidden w-full ";
  }

  styleClass += addClass;

  return <article className={styleClass}>{children}</article>;
}
