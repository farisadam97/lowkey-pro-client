import Axios from 'axios';
import {baseURL} from './config.service';

export const postLoginAxios = async (bodyReq) => {
    try{
        Axios({
            method: 'post',
            url: `${baseURL}/login`,
            data: bodyReq,
            headers: {"Content-Type": "application/json"}
          })
          .then(function (response) {
            console.log(response.data);
            localStorage.setItem('token', response.data.message);
          })
          .catch(function (error) {
            console.log(error.response.data);
          });
    }catch(error){
        console.log(error)
    }
}