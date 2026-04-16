import axios from 'axios';

//Создаем axios instance
export const apiInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Тут мы настраиваем перехватчики. Это нужно, чтобы автоматически прикреплять токен к каждому запросу.
//Добавляем токен из localStorage перед каждым запросом
apiInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
    }
);