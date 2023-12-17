import React from 'react'
import { Box, Text } from 'ink';
import { useTheme } from '../providers/ThemeProvider.js';
import { useSelectedDay } from '../providers/SelectedDayProvider.js';


type Props = {}

const DayForecast = (props: Props) => {
    console.log(props);
    const { theme: { styles } } = useTheme();
    const { selectedDay } = useSelectedDay();
  return (
    <Box
			flexDirection="column"
			width="100%"
			borderStyle={styles.secondaryBorderStyle}
		>
			<Box justifyContent="center" padding={1}>
				<Text bold color={styles.primaryElement}>
					Day Forecast for {selectedDay}
				</Text>
			</Box>
    </Box>
  )
}

export default DayForecast