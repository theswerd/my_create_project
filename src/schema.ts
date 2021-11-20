export interface classroom {
    id: string|number;
    name: string;
    description: string;
}

export interface person {
    name: string;
    id: string|number;
}

export interface class_people {
    person: string;
    class: string;
}

