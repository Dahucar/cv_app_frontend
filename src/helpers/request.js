import axios from "axios";

// host del backend obtenido desde el archivo .env
const baseUrl = process.env.REACT_APP_API_URL;
export const requestNotToken = ( endpoint, data, method = 'GET' ) => {
    const url = `${ baseUrl }/${ endpoint }`;
    console.log( url );
    if( method === 'GET' ){
        return axios({
            method: method,
            url: url,
            data: data
        });
    }else{
        return axios.post(url, data, {
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
}

export const requestWithToken = () => {

}