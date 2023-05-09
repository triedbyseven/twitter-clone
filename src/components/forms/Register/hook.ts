import { useState } from "react";
import { RegisterFormState } from "./interfaces";

interface useRegisterScreenHookResponse {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state: RegisterFormState;
};

const useRegisterScreenHook = (): useRegisterScreenHookResponse => {
  const [state, setState] = useState<RegisterFormState>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));    
  };

  return {
    onChangeHandler: onChangeHandler,
    state: state
  };
};

export default useRegisterScreenHook;