import { useState } from "react";
import { RegisterFormState } from "./interfaces";
import { API } from "../../../utils/api";
import { Sanitize, Validate } from "./validate";
import Utils from "./utils";

interface useRegisterScreenHookResponse {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: () => Promise<void>;
  isFormDisabled: (state: any) => boolean;
  state: RegisterFormState;
};

const useRegisterScreenHook = (): useRegisterScreenHookResponse => {
  const validate = Validate();
  const utils = Utils();
  const [state, setState] = useState<RegisterFormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    errorMessage: "" 
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = Sanitize()[key](event.target.value);
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const onSubmitHandler = async (): Promise<void> => {
    try {
      const user = utils.createUserEntity(state);

      validate.validateUser(user);
      
      const response = await API().addUser(user);
      if (response.data.error) throw new Error(response.data.error.message);
    } catch (error: any) {
      console.log('Error: ', error);
      setState(prevState => ({ ...prevState, errorMessage: error.message })); 
    };
  };

  const isFormDisabled = (state: any): boolean => {
    if (
      state.firstName &&
      state.lastName &&
      state.phone &&
      state.email &&
      state.username &&
      state.password
    ) return false;

    return true;
  };

  return {
    onChangeHandler: onChangeHandler,
    onSubmitHandler: onSubmitHandler,
    isFormDisabled: isFormDisabled,
    state: state
  };
};

export default useRegisterScreenHook;