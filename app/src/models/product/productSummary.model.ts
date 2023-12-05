import SellerModel from "../user/seller.model";

export default class ProductSummaryModel {
  public id: number = 0;
  public title: string = "";
  public price: number = 0;
  public image: string = "";
  public rating: number = 0;
  public seller: SellerModel = new SellerModel();
}
