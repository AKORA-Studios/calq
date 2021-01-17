import { parse, Subject, UserData } from "./util";
import config from './config.json';
import values from './data.json';
export const conf = config;
export const val = values;

const url = config.API_URL + "user/600435581ae4c71eba986277/";

export function getSubjects(): Promise<Subject[]> {
    return fetch(url + "data").then(r => r.json().then((o: UserData) => {
        console.log(o);
        return parse(o.data)
    }));
}

/** Returns the Status Code */
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