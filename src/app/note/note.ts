export class Note {
    title: string;
    description: string;
    id: number;
    dateCreated: string;

    constructor(title, description, id, dateCreated) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.dateCreated = dateCreated;
    }

}
