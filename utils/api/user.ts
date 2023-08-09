import { faker } from "@faker-js/faker";

export class userApiData {
  readonly name: string;
  readonly gender: string;
  readonly status: string;
  readonly email: string

  constructor() {
    this.name = faker.person.firstName();
    this.gender = faker.person.sexType();
    this.email = faker.internet.email(),
    this.status = this.getRandomStatus();
  }
  private getRandomStatus(): string {
    const statuses = ["inactive", "active"];
    const randomNumber = faker.number.int({ min: 1, max: 2 })
    const randomIndex = randomNumber % 2;
    return statuses[randomIndex];
  }
}
