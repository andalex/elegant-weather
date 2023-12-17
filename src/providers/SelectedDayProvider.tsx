import React, {
	useContext,
	useState,
	createContext,
    PropsWithChildren,
    Dispatch, SetStateAction 
} from "react";

type TSelectedDayContextState = {
    selectedDay: string;
    setSelectedDay: Dispatch<SetStateAction<string>>
}

const SelectedDayContext = createContext<TSelectedDayContextState>({
    selectedDay: '',
    setSelectedDay: (): void => {}
});

export const useSelectedDay = () => {
    const contextState = useContext(SelectedDayContext);

    if (contextState === undefined) {
        throw new Error(
            "useSelectedDay must be used within a SelectedDayProvider component"
        );
    }

    return contextState;
}

export const SelectedDayProvider = (props: PropsWithChildren) => {
    const [selectedDay, setSelectedDay] = useState('');
    return (
        <SelectedDayContext.Provider value={{ selectedDay, setSelectedDay}}>
            {props.children}
        </SelectedDayContext.Provider>
    )
}