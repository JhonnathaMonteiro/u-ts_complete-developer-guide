import * as faker from 'faker';
import { Mappeable } from './CustomMap';

export class Company implements Mappeable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName(),
    this.catchPhrase = faker.company.catchPhrase(),
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.companyName}</h1>
        <h3>CatchPhrase is: ${this.catchPhrase}</h3>
      </div>
    `
  }
}