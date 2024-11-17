import axios from 'axios';

console.log(import.meta.env.asp_base_url);
export const aspClient = new axios.Axios({ baseURL: import.meta.env.asp_base_url });
