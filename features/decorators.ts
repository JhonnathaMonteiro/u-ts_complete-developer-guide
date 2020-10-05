class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('switch');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('target:', target);
  console.log('key:', key);
}
