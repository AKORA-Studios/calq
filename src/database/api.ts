import { parse, Subject } from "./util";

const url = "http://uwu.org:3001/api/";

export function getSubjects(): Promise<Subject[]> {
    return fetch(url + "subject/all").then(r => r.json().then(o => parse(o)))
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