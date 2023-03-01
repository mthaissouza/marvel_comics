import axios from "axios";
import md5 from "md5";

const publicKey = "a016599672baf81a1a31b6c27bbc447b";
const privateKey = "cad433ea7566004a8ef90332e8b6110bdd13261f";

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default api;
