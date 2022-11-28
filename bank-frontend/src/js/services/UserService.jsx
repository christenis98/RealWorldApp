import axios from 'axios';


export class UserService {
    url="http://localhost:8080/api/bank/";

    getAll(){
        return axios.get(this.url).then(response=>response.data)
    }

    getById(id){
        return axios.get(this.url + id,id).then(response=>response.data)
    }
    save(user){
       
        return axios.post(this.url,user).then(response=>response.data)
    }
}