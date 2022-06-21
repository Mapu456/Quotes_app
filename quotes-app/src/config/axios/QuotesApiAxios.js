import axios from "axios";

export const QuotesApiAxios = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    responseType: "json",
});