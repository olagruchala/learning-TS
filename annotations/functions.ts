const add1 = (a: number, b: number): number => {
  return a + b;
};

function add2(a: number, b: number): number {
  return a + b;
}

const add3 = function(a: number, b: number): number {
  return a + b;
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// zapis ES2015 z uyciem destrukturyzacji obiektu
const logWeather2 = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);
logWeather2(todayWeather);
