const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15
  },
  setAge(newAge: number): void {
    this.age = newAge;
  }
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, long }
}: { coords: { lat: number; long: number } } = profile;
// const { lat, long }: { lat: number; long: number } = profile.coords;
