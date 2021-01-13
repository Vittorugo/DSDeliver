import axios from "axios";

const API_URL = 'https://vh-dsdeliver.herokuapp.com';

export function fetchOrders(){
   return axios(`${API_URL}/orders`)
}