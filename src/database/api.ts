import { Subject } from "./util";

const url = "http://localhost:3001/api/";

export function getSubjects(): Promise<Subject[]> {
    return fetch(url + "subjects").then(r => r.json())
}

/** Returns the Status Code */
export function addSubject(data: Subject): Promise<number> {
    return fetch(url + "subjects", {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(r => r.status);
}