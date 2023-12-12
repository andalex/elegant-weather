export const getDayReadable = (date: Date) => {
	const dayMap = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
	};
	const dayIndex = new Date(date).getDay();

	return dayMap[dayIndex];
};
