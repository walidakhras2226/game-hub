import axios, { AxiosRequestConfig } from "axios";

export interface ResponseProperties<T> {
    count: number;
    next?: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c36fe14bfc944606934d0ce2b1dc74d6",
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<ResponseProperties<T>>(this.endpoint, config).then(res => res.data);
    }
}

export default APIClient;