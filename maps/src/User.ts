import * as faker from 'faker';
import { Mappeable } from './CustomMap'

export class User implements Mappeable {
  name: string;
  location: {
    lat: number,
    lng: number
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }

  markerContent(): string {
    return `User name is ${this.name}`;
  }
}
