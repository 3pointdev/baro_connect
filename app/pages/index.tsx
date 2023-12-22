import Banner from "components/combinations/banner/banner";
import Category from "components/combinations/list/category";
import Product from "components/combinations/list/product";
import PageArticle from "components/divisions/article/pageArticle";
import { useEffect } from "react";
import { setIsMobile } from "src/redux/reducers/auth/userReducer";
import { selectProductState } from "src/redux/reducers/product/productReducer";
import { useAppDispatch, useAppSelector } from "src/redux/reduxHook";
import { PageProps } from "./page.type";

export default function Home(props: PageProps) {
  const categoryList = useAppSelector(selectProductState).categoryList;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsMobile(props.isMobile));
  }, [props.isMobile]);

  return (
    <PageArticle>
      <Banner router={props.router} isMobile={props.isMobile} />
      <Category
        list={categoryList}
        slidePerView={"auto"}
        spaceBetween={"8%"}
        addClass="my-2"
      />
      <Product isMobile={props.isMobile} />
    </PageArticle>
  );
}
