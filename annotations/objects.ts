const profile = {
  username: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15
  },
  setAge(newAge: number): void {
    this.age = newAge;
  }
};

const { age, username }: { age: number; username: string } = profile;
const {
  coords: { lat, long }
}: { coords: { lat: number; long: number } } = profile;
// const { lat, long }: { lat: number; long: number } = profile.coords;

console.log(profile.username);

