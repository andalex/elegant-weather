import React, { useEffect, useState } from "react";
import { Text } from "ink";
import { useTheme } from "../providers/ThemeProvider.js";

type TTimeProps = {
	tz: string;
};

//TODO get timeZone working for local time for the weather being looked up.
export const Time = (props: TTimeProps) => {
	const {theme: { styles }} = useTheme();

	const [time, setTime] = useState(
		new Date().toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
			timeZone: props.tz,
		})
	);

	useEffect(() => {
		const timeInterval = setInterval(() => {
			const date = new Date();

			setTime(
				date.toLocaleString("en-US", {
					hour: "numeric",
					minute: "numeric",
					hour12: true,
					timeZone: props.tz,
				})
			);
		}, 1000);

		return () => clearInterval(timeInterval);
	}, []);

	return <Text color={styles.primaryAccent}>{time}</Text>;
};
