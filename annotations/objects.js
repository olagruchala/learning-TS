var profile = {
    username: 'alex',
    age: 20,
    coords: {
        lat: 0,
        long: 15
    },
    setAge: function (newAge) {
        this.age = newAge;
    }
};
var age = profile.age, username = profile.username;
var _a = profile.coords, lat = _a.lat, long = _a.long;
// const { lat, long }: { lat: number; long: number } = profile.coords;
console.log(profile.username);
