const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const{ yesterday, today, tomorrow } = HIGH_TEMPERATURES;
//const {yesterday} = HIGH_TEMPERATURES;
//const {today} = HIGH_TEMPERATURES;
//const {tomorrow} = HIGH_TEMPERATURES;


console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
