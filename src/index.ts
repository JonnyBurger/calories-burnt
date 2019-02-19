const maximumHeartBeatsPerMinute = (age: number) => {
	return 208 - 0.7 * age;
};

const getVO2Max = (age: number, restingHeartBeatsPerMinute: number) => {
	return 15.3 * (maximumHeartBeatsPerMinute(age) / restingHeartBeatsPerMinute);
};

const getCardioRespiratoryFitnessFactor = (
	age: number,
	restingHeartBeatsPerMinute: number
) => {
	const vo2Max = getVO2Max(age, restingHeartBeatsPerMinute);
	if (vo2Max < 44) {
		return 1.07;
	}
	if (vo2Max <= 46) {
		return 1.06;
	}
	if (vo2Max <= 48) {
		return 1.05;
	}
	if (vo2Max <= 50) {
		return 1.04;
	}
	if (vo2Max <= 52) {
		return 1.03;
	}
	if (vo2Max <= 54) {
		return 1.01;
	}

	return 1;
};

export default function({
	slope,
	kilograms,
	meters,
	treadmill,
	age,
	restingHeartBeatsPerMinute
}: {
	slope: number;
	kilograms: number;
	meters: number;
	age: number;
	restingHeartBeatsPerMinute: number;
	treadmill?: boolean;
}): number {
	const treadMillFactor = treadmill ? 0 : 0.84;
	const cardioRespiratoryFactor = getCardioRespiratoryFitnessFactor(
		age,
		restingHeartBeatsPerMinute
	);
	if (slope <= -0.15) {
		return Math.round(
			((-0.01 * 100 * slope + 0.5) * kilograms + treadMillFactor) *
				(meters / 1000) *
				cardioRespiratoryFactor
		);
	}
	if (slope <= -0.1) {
		return Math.round(
			((-0.02 * 100 * slope + 0.35) * kilograms + treadMillFactor) *
				(meters / 1000) *
				cardioRespiratoryFactor
		);
	}
	if (slope <= 0) {
		return Math.round(
			((-0.04 * 100 * slope + 0.95) * kilograms + treadMillFactor) *
				(meters / 1000) *
				cardioRespiratoryFactor
		);
	}
	if (slope <= 0.1) {
		return Math.round(
			((0.05 * 100 * slope + 0.95) * kilograms + treadMillFactor) *
				(meters / 1000) *
				cardioRespiratoryFactor
		);
	}
	return Math.round(
		((0.07 * 100 * slope + 0.75) * kilograms + treadMillFactor) *
			(meters / 1000) *
			cardioRespiratoryFactor
	);
}
