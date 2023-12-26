import { createSlice } from "@reduxjs/toolkit";
import CategoryModel from "src/models/category/category.model";
import ProductSummaryModel from "src/models/product/productSummary.model";
import { RootState } from "../../store";

export interface MainState {
  productList: ProductSummaryModel[];
  categoryList: CategoryModel[];
}

const initialState: MainState = {
  categoryList: [
    { id: 0, title: "전체", isActive: true },
    { id: 1, title: "슬리브베어링" },
    { id: 2, title: "볼베어링" },
    { id: 3, title: "롤러베어링" },
    { id: 4, title: "슬라이드베어링" },
    { id: 5, title: "스러스트 볼베어링" },
    { id: 6, title: "스러스트 롤러베어링" },
  ],
  productList: [
    {
      id: 1,
      title: "Product 1",
      price: 5000,
      image: "https://source.unsplash.com/random",
      rating: 4,
      category: 2,
      seller: {
        id: 1,
        nickname: "Seller 1",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1000",
      },
    },

    {
      id: 2,
      title: "Product 2",
      price: 3000,
      image: "https://source.unsplash.com/random",
      rating: 3,
      category: 2,
      seller: {
        id: 2,
        nickname: "Seller 2",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-2000",
      },
    },

    {
      id: 3,
      title: "Product 3",
      price: 4500,
      image: "https://source.unsplash.com/random",
      rating: 5,
      category: 1,
      seller: {
        id: 3,
        nickname: "Seller 3",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-3000",
      },
    },

    {
      id: 4,
      title: "Product 4",
      price: 6000,
      image: "https://source.unsplash.com/random",
      rating: 4,
      category: 3,
      seller: {
        id: 4,
        nickname: "Seller 4",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-4000",
      },
    },

    {
      id: 5,
      title: "Product 5",
      price: 2500,
      image: "https://source.unsplash.com/random",
      rating: 2,
      category: 2,
      seller: {
        id: 5,
        nickname: "Seller 5",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-5000",
      },
    },

    {
      id: 6,
      title: "Product 6",
      price: 7000,
      image: "https://source.unsplash.com/random",
      rating: 4,
      category: 4,
      seller: {
        id: 6,
        nickname: "Seller 6",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-6000",
      },
    },

    {
      id: 7,
      title: "Product 7",
      price: 4000,
      image: "https://source.unsplash.com/random",
      rating: 3,
      category: 4,
      seller: {
        id: 7,
        nickname: "Seller 7",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-7000",
      },
    },

    {
      id: 8,
      title: "Product 8",
      price: 5500,
      image: "https://source.unsplash.com/random",
      rating: 5,
      category: 1,
      seller: {
        id: 8,
        nickname: "Seller 8",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-8000",
      },
    },

    {
      id: 9,
      title: "Product 9",
      price: 3300,
      image: "https://source.unsplash.com/random",
      rating: 2,
      category: 2,
      seller: {
        id: 9,
        nickname: "Seller 9",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-9000",
      },
    },

    {
      id: 10,
      title: "Product 10",
      price: 6500,
      image: "https://source.unsplash.com/random",
      rating: 4,
      category: 5,
      seller: {
        id: 10,
        nickname: "Seller 10",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1000",
      },
    },

    {
      id: 11,
      title: "Product 11",
      price: 2800,
      image: "https://source.unsplash.com/random",
      rating: 3,
      category: 5,
      seller: {
        id: 11,
        nickname: "Seller 11",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1100",
      },
    },

    {
      id: 12,
      title: "Product 12",
      price: 4800,
      image: "https://source.unsplash.com/random",
      rating: 5,
      category: 2,
      seller: {
        id: 12,
        nickname: "Seller 12",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1200",
      },
    },

    {
      id: 13,
      title: "Product 13",
      price: 3800,
      image: "https://source.unsplash.com/random",
      rating: 4,
      category: 5,
      seller: {
        id: 13,
        nickname: "Seller 13",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1300",
      },
    },

    {
      id: 14,
      title: "Product 14",
      price: 4200,
      image: "https://source.unsplash.com/random",
      rating: 3,
      category: 2,
      seller: {
        id: 14,
        nickname: "Seller 14",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1400",
      },
    },

    {
      id: 15,
      title: "Product 15",
      price: 6000,
      image: "https://source.unsplash.com/random",
      rating: 5,
      category: 2,
      seller: {
        id: 15,
        nickname: "Seller 15",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1500",
      },
    },

    {
      id: 16,
      title: "Product 16",
      price: 2300,
      image: "https://source.unsplash.com/random",
      rating: 4,
      category: 4,
      seller: {
        id: 16,
        nickname: "Seller 16",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1600",
      },
    },

    {
      id: 17,
      title: "Product 17",
      price: 3200,
      image: "https://source.unsplash.com/random",
      rating: 2,
      category: 2,
      seller: {
        id: 17,
        nickname: "Seller 17",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1700",
      },
    },

    {
      id: 18,
      title: "Product 18",
      price: 7000,
      image: "https://source.unsplash.com/random",
      rating: 4,
      category: 5,
      seller: {
        id: 18,
        nickname: "Seller 18",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1800",
      },
    },

    {
      id: 19,
      title: "Product 19",
      price: 4100,
      image: "https://source.unsplash.com/random",
      rating: 3,
      category: 2,
      seller: {
        id: 19,
        nickname: "Seller 19",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-1900",
      },
    },

    {
      id: 20,
      title: "Product 20",
      price: 5500,
      image: "https://source.unsplash.com/random",
      rating: 5,
      category: 3,
      seller: {
        id: 20,
        nickname: "Seller 20",
        profileImage: "https://source.unsplash.com/random",
        company: "연합시스템",
        phone: "010-5456-2000",
      },
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export const selectProductState = (state: RootState) => state.product;
export default productSlice.reducer;
