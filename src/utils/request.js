import axios from "axios";
import router from "@/router";

const request = axios.create({
    timeout: 70000,
});

request.defaults.headers.common["Content-Type"] = "application/json";
request.defaults.headers.common.Accept = "application/json";

request.interceptors.request.use(
    (config) => {
        return {
            ...config,
            headers: {
                ...config.headers,
                common: {
                    ...config.headers.common,
                },
            },
        };
    },
    (error) =>
        Promise.reject(error)
);

request.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            (error.response.status === 400 && error.response.statusText === "Not Found") ||
            (error.response.status === 404 && error.response.statusText === "Not Found") ||
            (error.response.status === 500 && error.response.data.message === "Expired token")
        ) {
            router.push("/");
            localStorage.clear();
        } else if (error.response.status === 500) {
           // const message = error?.response?.data?.message || error?.message || "Error";
            //console.log(message);
        }
        return Promise.reject(error);
    }
);
/**
 * @param {string} url
 * @param {string} method
 * @param {object} data
 *
 */
export default request;