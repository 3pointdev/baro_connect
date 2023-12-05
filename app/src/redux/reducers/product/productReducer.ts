import { createSlice } from "@reduxjs/toolkit";
import ProductSummaryModel from "src/models/product/productSummary.model";
import { RootState } from "../../store";

export interface MainState {
  productList: ProductSummaryModel[];
}

const initialState: MainState = {
  productList: [
    {
      id: 1,
      title: "Product 1",
      price: 50,
      image: "https://source.unsplash.com/random",
      rating: 4,
      seller: {
        id: 1,
        nickname: "Seller 1",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 1",
        phone: "010-5456-1000",
      },
    },

    {
      id: 2,
      title: "Product 2",
      price: 30,
      image: "https://source.unsplash.com/random",
      rating: 3,
      seller: {
        id: 2,
        nickname: "Seller 2",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 2",
        phone: "010-5456-2000",
      },
    },

    {
      id: 3,
      title: "Product 3",
      price: 45,
      image: "https://source.unsplash.com/random",
      rating: 5,
      seller: {
        id: 3,
        nickname: "Seller 3",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 3",
        phone: "010-5456-3000",
      },
    },

    {
      id: 4,
      title: "Product 4",
      price: 60,
      image: "https://source.unsplash.com/random",
      rating: 4,
      seller: {
        id: 4,
        nickname: "Seller 4",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 4",
        phone: "010-5456-4000",
      },
    },

    {
      id: 5,
      title: "Product 5",
      price: 25,
      image: "https://source.unsplash.com/random",
      rating: 2,
      seller: {
        id: 5,
        nickname: "Seller 5",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 5",
        phone: "010-5456-5000",
      },
    },

    {
      id: 6,
      title: "Product 6",
      price: 70,
      image: "https://source.unsplash.com/random",
      rating: 4,
      seller: {
        id: 6,
        nickname: "Seller 6",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 6",
        phone: "010-5456-6000",
      },
    },

    {
      id: 7,
      title: "Product 7",
      price: 40,
      image: "https://source.unsplash.com/random",
      rating: 3,
      seller: {
        id: 7,
        nickname: "Seller 7",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 7",
        phone: "010-5456-7000",
      },
    },

    {
      id: 8,
      title: "Product 8",
      price: 55,
      image: "https://source.unsplash.com/random",
      rating: 5,
      seller: {
        id: 8,
        nickname: "Seller 8",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 8",
        phone: "010-5456-8000",
      },
    },

    {
      id: 9,
      title: "Product 9",
      price: 33,
      image: "https://source.unsplash.com/random",
      rating: 2,
      seller: {
        id: 9,
        nickname: "Seller 9",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 9",
        phone: "010-5456-9000",
      },
    },

    {
      id: 10,
      title: "Product 10",
      price: 65,
      image: "https://source.unsplash.com/random",
      rating: 4,
      seller: {
        id: 10,
        nickname: "Seller 10",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 10",
        phone: "010-5456-1000",
      },
    },

    {
      id: 11,
      title: "Product 11",
      price: 28,
      image: "https://source.unsplash.com/random",
      rating: 3,
      seller: {
        id: 11,
        nickname: "Seller 11",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 11",
        phone: "010-5456-1100",
      },
    },

    {
      id: 12,
      title: "Product 12",
      price: 48,
      image: "https://source.unsplash.com/random",
      rating: 5,
      seller: {
        id: 12,
        nickname: "Seller 12",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 12",
        phone: "010-5456-1200",
      },
    },

    {
      id: 13,
      title: "Product 13",
      price: 38,
      image: "https://source.unsplash.com/random",
      rating: 4,
      seller: {
        id: 13,
        nickname: "Seller 13",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 13",
        phone: "010-5456-1300",
      },
    },

    {
      id: 14,
      title: "Product 14",
      price: 42,
      image: "https://source.unsplash.com/random",
      rating: 3,
      seller: {
        id: 14,
        nickname: "Seller 14",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 14",
        phone: "010-5456-1400",
      },
    },

    {
      id: 15,
      title: "Product 15",
      price: 60,
      image: "https://source.unsplash.com/random",
      rating: 5,
      seller: {
        id: 15,
        nickname: "Seller 15",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 15",
        phone: "010-5456-1500",
      },
    },

    {
      id: 16,
      title: "Product 16",
      price: 23,
      image: "https://source.unsplash.com/random",
      rating: 4,
      seller: {
        id: 16,
        nickname: "Seller 16",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 16",
        phone: "010-5456-1600",
      },
    },

    {
      id: 17,
      title: "Product 17",
      price: 32,
      image: "https://source.unsplash.com/random",
      rating: 2,
      seller: {
        id: 17,
        nickname: "Seller 17",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 17",
        phone: "010-5456-1700",
      },
    },

    {
      id: 18,
      title: "Product 18",
      price: 70,
      image: "https://source.unsplash.com/random",
      rating: 4,
      seller: {
        id: 18,
        nickname: "Seller 18",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 18",
        phone: "010-5456-1800",
      },
    },

    {
      id: 19,
      title: "Product 19",
      price: 41,
      image: "https://source.unsplash.com/random",
      rating: 3,
      seller: {
        id: 19,
        nickname: "Seller 19",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 19",
        phone: "010-5456-1900",
      },
    },

    {
      id: 20,
      title: "Product 20",
      price: 55,
      image: "https://source.unsplash.com/random",
      rating: 5,
      seller: {
        id: 20,
        nickname: "Seller 20",
        profileImage: "https://source.unsplash.com/random",
        company: "Company 20",
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
