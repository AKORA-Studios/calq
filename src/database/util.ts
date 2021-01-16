export interface User {
    username: string;
    password: string;
    id?: any;
}

export interface Test {
    /** The name of the Test */
    name: string;
    /** Tegs like `trigonometry, geometry, probability, orally`. */
    tags: string[];
    /** The date the Test was written at. */
    date: Date;
    /** Shows how much this test effects your grade. 
     * Klassenarbeit = BIG BOIIIIIII
    */
    type: 'Big' | 'Smal';
    /** A number ranging from `0` to `15` that stands for the number of points you got in the Test. */
    points: number;
}

export type SubjectType = 'MA' | 'ENG' | 'DE' | 'CHE' | 'FRZ' | 'BIO' | 'SPA' | 'GEO' | 'INF' | 'ETH' | 'KU' | 'MU';
export interface Subject {
    /** Name of the Subject */
    name: SubjectType;
    color: string;
    /** A List of all tests written in this Subject */
    tests: Test[];
}


export interface UserData {
    id?: any;
    userID: string;
    data: Subject[]
}

export function parse(data: Subject[]) {
    for (const sub of data) {
        for (const test of sub.tests) {
            //@ts-ignore
            test.date = new Date(test.date);
        }

        //@ts-ignore
        sub.tests = (sub.tests as Test[]).sort((a, b) => a.date.getTime() - b.date.getTime())
    }



    return data as Subject[];
}



export function range(start: number, end?: number): number[] {
    if (!end) { end = start; start = 0 }
    const arr = [];
    for (var i = start; i < end + 1; i++) arr.push(i);
    return arr;
}

export function avarage(arr: number[]) {
    return (arr.reduce((a, b) => a + b) / arr.length)
}

export function max(arr: number[]) {
    var max = 0;
    for (const v of arr) if (v > max) max = v;
    return max;
}



export function realAverageSubjectPoints(arr: Test[]) {
    var numberBug = 0,
        numberSmal = 0

    const arraySmal = arr.filter(v => v.type === 'Smal')
    const arrayBug = arr.filter(v => v.type === 'Big')

    arrayBug.forEach(e => {
        numberBug += e.points
    })
    arrayBug.forEach(e => {
        numberSmal += e.points
    })

    var averageSmal = numberSmal / arraySmal.length
    var avcerageBug = numberBug / arrayBug.length


    return (averageSmal + avcerageBug) / 2
}