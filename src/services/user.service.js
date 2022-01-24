import Axios from 'axios';
import {baseURL} from './config.service';

export const getPlayersById = async () =>{
  // console.log(baseURL)
    try{
      let idUser = localStorage.getItem('id');
      const {data} = await Axios.get(`${baseURL}/players/${idUser}`)
      // console.log(data.message);
      return data
    }catch(error){
        console.log(error)
    }
}

export const updatePlayerById = async (bodyReq) => {
  try{
    try{
      Axios({
          method: 'put',
          url: `${baseURL}/players/${bodyReq.id}`,
          data: bodyReq,
          headers: {"Content-Type": "application/json"}
        })
        .then(function (response) {
          console.log(response);
          alert("Data berhasil di edit!");
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
  }catch(error){
      console.log(error)
  }
  }catch(error){
    console.log(error)
  }
}