export interface IHoliday {
    id: string;
    date: string;
    title: string;
    type: string;
}

export class Holiday {
    constructor(public id: string, date: string, title: string, type: string) {

    }
}
