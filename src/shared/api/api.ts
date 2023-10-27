import axios, { AxiosInstance } from 'axios';
import { redirect } from 'react-router-dom';
import { RootState, store } from '../../store/store';

const baseURL = 'https://b620-185-7-93-108.ngrok-free.app';

export const $api: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'ngrok-skip-browser-warning' : '69420'
    }
});

// $api.interceptors.request.use(async (config) => {
//     const state: RootState = store.getState();
//     const accessToken = state.token.accessToken;

//     if (accessToken) {
//         config.headers.Authorization = `${accessToken}`;
//     }

//     return config;
// });

// $api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;

//             try {
//                 const state: RootState = store.getState();
//                 const refToken = state.token.refreshToken;

//                 // Вызов API для обновления access и refresh токенов
//                 const response = await $api.post('/api/token', { refToken });
//                 const { accessToken, refreshToken } = response.data;

//                 // store.dispatch(setTokens({ accessToken, refreshToken }));

//                 originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//                 return $api(originalRequest);
//             } catch (error) {
//                 // store.dispatch(clearTokens());
//             }
//         }

//         return Promise.reject(error);
//     }
// );