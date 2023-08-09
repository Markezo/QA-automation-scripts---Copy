import {faker} from '@faker-js/faker';


export class fakeData {
    readonly description: string;
    readonly repoName: string;

    constructor() {
        this.description = faker.animal.cat();
        this.repoName = faker.git.branch();
    }
}