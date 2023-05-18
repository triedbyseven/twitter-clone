import { v4 as uuid } from 'uuid';
import { RegisterFormState } from "./interfaces";
import { User } from "../../../types/User";

interface UtilsResponse {
 createUserEntity: (state: RegisterFormState) => User;
};

const Utils = (): UtilsResponse => {
  const createUserEntity = (state: RegisterFormState): User => {
    return{
      id: uuid(),
      firstName: state.firstName,
      lastName: state.lastName,
      phone: state.phone,
      email: state.email,
      username: state.username,
      password: state.password
    };
  };

  return {
    createUserEntity
  };
};

export default Utils;