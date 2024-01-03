import { payload } from "./authSlice";

export interface response {
    message: String;
    status: number;
    token?: String;
}

export function login(payload : payload) {
    return new Promise<{  }>((resolve) =>
      setTimeout(() => {
        let dataResponse :response = {
            message: 'login failed',
            status: 500
        } 
        if(payload.username == 'admin' && payload.password == 'admin' ) {
            dataResponse = {
                message: 'login successfully',
                status: 200,
                token: 'dummy token'
            }
        }

        resolve(dataResponse)
      }, 500)
    );
  }
  