import UserModel from "./user.model";

export default class SellerModel extends UserModel {
  public company: string = "";
  public phone: string = "";
}
