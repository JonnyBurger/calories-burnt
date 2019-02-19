# calories-burnt

> Calculate the number of calories burnt from a run.

## Installation

```sh
npm i calories-burnt
```

## Usage

```js
import caloriesBurnt from 'calories-burnt';

caloriesBurnt({
    meters: 1000,
    slope: -0.015,
    treadmill: false,
    age: 23,
    restingHeartBeatsPerMinute: 80,
    kilograms: 80
}); // => 87

```

`caloriesBurnt({meters, slope, treadmill?, age, restingHeartBeatsPerMinute, kilograms}) => number`

Options:
 - `meters`: Distance run in meters, not factoring in altitude.
 - `slope`: The slope in percentage. `-0.015` means that the run was downhill with a `-1.5%` slope.
 - `treadmill`: Whether the run was on a treadmill. Because there is no air resistance, fewer calories will be burnt. Optional. Default value: `false`.
 - `age`:  The age of the runner.
 - `restingHeartBeatsPerMinute`: The resting heart heart beats per minute rate. Normal rate is between 60-100bpm. Athletes have a lower rate and therefore burn fewer calories. 
 - `kilograms`: Weight of the runner in kilograms.

## Contribution

Contributions welcome. Test suite can be run using `npm test`.

## Author
[Jonny Burger](https://jonny.io)

## License
© 2019 MIT

## Credits

- [Original Formula](http://www.shapesense.com/fitness-exercise/calculators/running-calorie-burn-calculator.shtml)
