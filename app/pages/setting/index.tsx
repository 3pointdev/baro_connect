import PageArticle from "components/divisions/article/pageArticle";
import { PageProps } from "pages/page.type";
import { useEffect } from "react";
import { setIsMobile } from "src/redux/reducers/auth/userReducer";
import { useAppDispatch } from "src/redux/reduxHook";

export default function Setting(props: PageProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsMobile(props.isMobile));
  }, [props.isMobile]);

  return (
    <PageArticle>
      <></>
    </PageArticle>
  );
}
