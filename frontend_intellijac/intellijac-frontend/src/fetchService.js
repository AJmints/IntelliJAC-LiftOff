

const USERS_REST_API_URL = 'http://localhost:8080/api';

export default class fetchService {
getUsers(){
return fetch(USERS_REST_API_URL).then((res => res.json()));

}
}

//export default new fetchService();