import { Days } from "../../../types/days.js";

export const getDayReadable = (date: string) => {
	const dayMap = {
		0: Days.Sunday,
		1: Days.Monday,
		2: Days.Tuesday,
		3: Days.Wednesday,
		4: Days.Thursday,
		5: Days.Friday,
		6: Days.Saturday,
	};

	/**
	 * Replace '-'with '/' in date format due to an issue with Date() returning
	 * off-by-one day with the format yyyy-mm-dd
	 */
	const slashFormattedDate = date.replace(/-/g, '\/');

	const dayIndex = new Date(slashFormattedDate).getDay();

	const splitDate = slashFormattedDate.split('/');

	splitDate.shift();

	return { dayName: dayMap[dayIndex], shortFormat: splitDate.join('/') };
};
