import { IRegistrationForm } from "../../hooks/interfaces";

export class User implements IRegistrationForm {
  login = "";
  email = "";
  password = "";
  password2 = "";
  country = "";
  city = "";
  street = "";
  house = "";
  phone = "";
}
