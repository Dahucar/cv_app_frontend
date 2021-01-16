import Swal from "sweetalert2";
import { requestNotToken } from "../helpers/request";
import { showErrorResquest } from "../helpers/showErrorsRequet";
import { types } from "../types/types";

// async acctions
export const loginAction = ( email, password ) => {
    return async ( dispath ) => {
        try {
            const response = await requestNotToken( 'add-user', { email, password }, 'POST' );
            const body = response.data;
            console.log( body );
        } catch (error) {
            console.log( error );
        }
    }
}

export const registerAction = ( nick, name, surname, email, password ) => {
    return async ( dispath ) => {
        try {
            const data = {
                nick,
                name,
                surname,
                email,
                password
            }
            const response = await requestNotToken( 'add-user', data, 'POST');
            const body = response.data;
            if( body.ok ){
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init', new Date().getTime());
                dispath( login({
                    uid: body.user.uid,
                    name: body.user.name
                }));
                Swal.fire('Success', body.msg, 'success');
            }else{
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            const data = error.response.data.errors;
            const dataMsg = Object.values(data);
            showErrorResquest( dataMsg ); 
        }
    }
}

// sync acctions
export const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

export const logout = () => ({
    type: types.authLogout
})

export const check = () => ({
    type: types.authCheck
})