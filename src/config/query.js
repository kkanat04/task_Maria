import Axios from "axios";
import {DOMAIN, Routes} from "./api";

export const api = Axios.create({
    baseURL: DOMAIN,
    headers: {
        "Content-Type": "application/json",
    },
});

export const Get = async (key, fn = () => {}, opt) => {
    try {
        const route = typeof key === "string" ? Routes.get[key] : key.join();
        const { data, status } = await api.get(route + opt);
        if (status < 300) {
            fn(data);
            return data;
        }

    } catch (err) {
        // fail(err);
        return null;
    }
};
