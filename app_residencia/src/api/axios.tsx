import axios from "axios";

//VERIFICAR QUAL É O SEU LOCALHOST, CASO QUEIRA CONSUMIR API, MAS PRIMEIRO PRECISO TERMIANR OS MÉTODOS
//OBS, QUANDO FOR COLOCAR OUTRA BASEURL, NAO APAGAR A ANTIGA, COMENTE APENAS, COMENTE E COLOQUE A SUA 

const Axios = axios.create({
    //baseURL: "http://10.0.2.2:8080/comercio-seguro",
    baseURL: "http://192.168.100.184:8080/comercio-seguro",
});

export default Axios;