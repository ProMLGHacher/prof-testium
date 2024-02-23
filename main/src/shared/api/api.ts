import axios, { AxiosInstance } from 'axios';
import { RootState, store } from '../../store/store';
import { logOut } from '../../slices/authSlice';

const baseURL = 'http://83.147.245.210:8080/api/';

export const $api: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'ngrok-skip-browser-warning' : '69420'
    }
});

$api.interceptors.request.use(async (config) => {
    const state: RootState = store.getState();
    const accessToken = state.auth.token

    if (accessToken) {
        config.headers.Authorization = `${accessToken}`;
    }

    return config;
});

$api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401) {
            store.dispatch(logOut())
        }

        return Promise.reject(error);
    }
);

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