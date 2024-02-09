import { signIn } from 'src/api/authApi';
import {UserLoginCredentials} from '../../types/UserLoginCredentials';

export const LogUserIn = (userCredentials: UserLoginCredentials) => {
  return async (dispatch: any) => {
    try {
      userCredentials.onSuccess();

      //We can use API calling like this. 

      // var formdata = new FormData();
      // formdata.append('mobile', mobileNum);

      // signIn(formdata)
      //   .then(response => {
      //     if (response?.status == 200) {
      //       if (isFunction(onSuccess)) {
      //         onSuccess(response);
      //       }
      //       dispatch(onLogin(response));
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     if (isFunction(onFailure)) {
      //       onFailure();
      //     }
      //   });
    } catch (error) {
      console.log('Error!', error);

      userCredentials.onFailure();
    }
  };
};

export const RegisterUser = (userCredentials: UserLoginCredentials) => {
  return async (dispatch: any) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
};
