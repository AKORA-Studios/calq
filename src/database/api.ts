import { parse, Subject, UserData } from "./util";

const url = "http://192.168.1.24:3001/api/user/600359c10d42124580e6e6fc/";

export function getSubjects(): Promise<Subject[]> {
    return fetch(url + "data").then(r => r.json().then((o: UserData) => parse(o.data)));
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