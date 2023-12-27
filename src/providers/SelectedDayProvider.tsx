import React, {
	useContext,
	useState,
	createContext,
	PropsWithChildren,
	Dispatch,
	SetStateAction,
} from "react";
import { TforecastDay } from "../api/transforms/types.js";
import { Days } from "../types/days.js";
import { MoonPhases } from "../types/moonPhase.js";

type TSelectedDayContextState = {
	selectedDay: TforecastDay;
	setSelectedDay: Dispatch<SetStateAction<TforecastDay>>;
};

//TODO I only really need the dayId here and the hours array for the UX... slim this down.
const SelectedDayDefaultState = {
    dayId: "",
    dayReadable: {
        dayName: Days.Sunday,
        shortFormat: "",
    },
    condition: "",
    conditionType: "",
    avgTempC: "",
    avgTempF: "",
    windMPH: "",
    maxTempC: "",
    maxTempF: "",
    minTempC: "",
    minTempF: "",
    dailyChanceOfRain: 0,
    dailyChanceOfSnow: 0,
    dailyWillItRain: false,
    dailyWillItSnow: false,
    astro: {
        sunrise: "",
        sunset: "",
        moonPhase: MoonPhases.NewMoon,
    },
    hours: [{
        timeEpoc: '',
        time: {
            readableTime: '',
            hour: 0,
            now: 0
        },
        tempC: '',
        tempF: '',
        condition: '',
        conditionType: '',
        windMPH: '',
        windDir: '',
        feelsLikeC: '',
        feelsLikeF: '',
        chanceOfRain: 0,
        chanceOfSnow: 0,
        willItRain: false,
        willItSnow: false,
    }]
}

const SelectedDayContext = createContext<TSelectedDayContextState>({
	selectedDay: SelectedDayDefaultState,
	setSelectedDay: (): void => {},
});

export const useSelectedDay = () => {
	const contextState = useContext(SelectedDayContext);

	if (contextState === undefined) {
		throw new Error(
			"useSelectedDay must be used within a SelectedDayProvider component"
		);
	}

	return contextState;
};

export const SelectedDayProvider = (props: PropsWithChildren) => {
	const [selectedDay, setSelectedDay] = useState(SelectedDayDefaultState);
	return (
		<SelectedDayContext.Provider value={{ selectedDay, setSelectedDay }}>
			{props.children}
		</SelectedDayContext.Provider>
	);
};
