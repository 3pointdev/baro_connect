import SellerModel from "../user/seller.model";

export default class ProductModel {
  public id: number = 0;
  public title: string = "";
  public price: number = 0;
  public image: string = "";
  public seller: SellerModel = new SellerModel();
}
