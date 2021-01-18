import { parse, Subject, User, UserData } from "./util";
import config from './config.json';
import values from './data.json';
import axios, { AxiosRequestConfig } from "axios";
export const conf = config;
const { API_URL } = config;
export const val = values;
export var user: User | undefined = undefined;

const opt: AxiosRequestConfig = {
    withCredentials: true
}

export function login(data: User) {
    return axios.post(API_URL + "/login", data, opt).then(() =>
        axios.get(API_URL + "/user", opt).then(r => r.data).then((data) => {
            user = data as unknown as User
        }));
}

export function getSubjects(): Promise<Subject[]> {
    return axios.get(`${API_URL}/data`, opt).then(e => e.data).then((o: UserData) => {
        console.log(o);
        return parse(o.data)
    });
}

/** Returns the Status Code */
/*
export function addSubject(data: Subject): Promise<number> {
    return fetch(url + "subject", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        method: 'POST'
    }).then(r => r.status);
}
*/