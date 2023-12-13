import React, { useEffect, useState } from "react";
import { Box, Text } from "ink";

type TTimeProps = {
	tz: string;
};

//TODO get timeZone working for local time for the weather being looked up.
export const Time = (props: TTimeProps) => {
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

	return <Text color="cyan">{time}</Text>;
};
