import Banner from "components/combinations/banner/banner";
import Category from "components/combinations/list/category";
import Product from "components/combinations/list/product";
import PageArticle from "components/divisions/article/pageArticle";
import { selectProductState } from "src/redux/reducers/product/productReducer";
import { useAppSelector } from "src/redux/reduxHook";
import { PageProps } from "./page.type";

export default function Home(props: PageProps) {
  const categoryList = useAppSelector(selectProductState).categoryList;

  return (
    <PageArticle>
      <Banner router={props.router} />
      <Category
        list={categoryList}
        slidePerView={"auto"}
        spaceBetween={"8%"}
        addClass="my-2"
      />
      <Product />
    </PageArticle>
  );
}
