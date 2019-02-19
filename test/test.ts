import test from 'ava';
import caloriesBurnt from '../src';

test('Basic calculation', t => {
	const calories = caloriesBurnt({
		meters: 1000,
		slope: -0.015,
		treadmill: false,
		age: 23,
		restingHeartBeatsPerMinute: 80,
		kilograms: 80
	});
	t.is(calories, 87);
});

test('Twice as much = Twice as many calories', t => {
	const calories = caloriesBurnt({
		meters: 2000,
		slope: -0.015,
		treadmill: false,
		age: 23,
		restingHeartBeatsPerMinute: 80,
		kilograms: 80
	});
	t.is(calories, 175);
});

test('Uphill = more calories', t => {
	const calories = caloriesBurnt({
		meters: 1000,
		slope: 0.04,
		treadmill: false,
		age: 23,
		restingHeartBeatsPerMinute: 80,
		kilograms: 80
	});
	t.is(calories, 99);
});

test('Athlete - less calories', t => {
	// Athletes have a lower resting heart rate and therefore burn less calories!
	const calories = caloriesBurnt({
		meters: 1000,
		slope: -0.015,
		treadmill: false,
		age: 30,
		restingHeartBeatsPerMinute: 40,
		kilograms: 80
	});
	t.is(calories, 82);
});
