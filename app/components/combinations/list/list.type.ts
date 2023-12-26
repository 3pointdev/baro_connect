import CategoryModel from "src/models/category/category.model";

export interface CategoryProps {
  list: CategoryModel[];
  addClass?: string;
  slidePerView?: number | "auto";
  spaceBetween?: string;
}
