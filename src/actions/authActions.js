import Swal from "sweetalert2";
import { requestNotToken, requestWithToken } from "../helpers/request";
import { showErrorResquest } from "../helpers/showErrorsRequet";
import { types } from "../types/types";

// async acctions
export const loginAction = ( email, password ) => {
    return async ( dispath ) => {
        try {
            const response = await requestNotToken( 'login', { email, password }, 'POST' );
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

export const ckeckingAction = () => {
    return async ( dispatch ) => {
        try {
            const response = await requestWithToken( 'renew-token' );
            const body = response.data;
            console.log({ body });
            console.log( localStorage.getItem('token'));
            if ( body.ok ) {
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch( login({
                    uid: body.uid,
                    name: body.user.name
                }));
                Swal.fire('Exito', 'Inicio de sesión correcto', 'success');
            }else{
                // Swal.fire('Error', body.msg, 'error');
                // si el token no es correcto, será redireccionado al /login
                dispatch( check() );
            }
        } catch (error) {
            console.log({ error });
            dispatch( check() );
        }
    }
}

// sync actions 
export const logoutAction = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
        dispatch( check() );
    }
}

// sync actions to dispatch
export const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

export const logout = () => ({
    type: types.authLogout
})

// updated checking property of state on AuthReducer
const check = () => ({
    type: types.authCheck
})