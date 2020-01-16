var add1 = function (a, b) {
    return a + b;
};
function add2(a, b) {
    return a + b;
}
var add3 = function (a, b) {
    return a + b;
};
var todayWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (forecast) {
    console.log(forecast.date);
    console.log(forecast.weather);
};
// zapis ES2015 z uyciem destrukturyzacji obiektu
var logWeather2 = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todayWeather);
logWeather2(todayWeather);
