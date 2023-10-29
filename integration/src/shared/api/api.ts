import axios from "axios";
import { RootState, store } from "../../app/store/store";
import { logOut } from "../../slices/auth/auth";

export const $apiUrl = 'https://0435-176-28-64-201.ngrok-free.app/api/'

export const $api = axios.create({
    baseURL: $apiUrl,
    headers: {
        'ngrok-skip-browser-warning' : '69420'
    }
});

$api.interceptors.request.use(async (config) => {
    const state: RootState = store.getState();
    const token = state.auth.token;

    if (token) {
        config.headers.Authorization = `${token}`;
    }

    return config;
});

$api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            store.dispatch(logOut())
        }

        return Promise.reject(error);
    }
);