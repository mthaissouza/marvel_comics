import axios from "axios";
import md5 from "md5";

const publicKey = "ADD YOUR KEY";
const privateKey = "ADD YOUR KEY";

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const REACT_APP_GOOGLE_API_KEY = "AIzaSyAWfvApF7e1qquSEaFx4sjJUZGgiGmocpI";

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default api;
