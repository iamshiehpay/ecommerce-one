import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmEwODk1NTdlYmNhNDZlYjZmNGViNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDcyODkxOCwiZXhwIjoxNjYwOTg4MTE4fQ.nXT2XmbyfiXfhk6cnzQC5O0b2m5mUwNTP0aShXZrmqQ'
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});