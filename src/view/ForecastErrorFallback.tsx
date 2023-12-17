import React from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";
import { useTheme } from "../providers/ThemeProvider.js";

export const ForecastErrorFallback = () => {
	const {
		theme: { styles },
	} = useTheme();

	return (
		<Box flexDirection="column">
			<Box
				borderStyle={styles.tertiaryBorderStyle}
				borderColor={styles.tertiaryElement}
				justifyContent="center"
				paddingTop={0}
				paddingLeft={1}
				paddingRight={1}
			>
				<Text color={styles.primaryAccent}>
					Something went wrong... <Spinner type="bouncingBall" />
				</Text>
			</Box>
		</Box>
	);
};
