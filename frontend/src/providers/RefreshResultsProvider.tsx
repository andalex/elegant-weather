import React, {
	useContext,
	useState,
	createContext,
	PropsWithChildren,
	Dispatch,
	SetStateAction,
    useEffect,
} from "react";

//TODO move this to the API directory since it pertains to data fetching and is used inside the ForecastsProvider currently.
type TrefreshResultsContextState = {
	refreshResults: boolean,
    setRefreshResults: Dispatch<SetStateAction<boolean>>;
};

const refreshResultsContext = createContext<TrefreshResultsContextState>({
	refreshResults: false,
    setRefreshResults: (): void => {}
});

export const useRefreshResults = () => {
	const contextState = useContext(refreshResultsContext);

	if (contextState === undefined) {
		throw new Error(
			"userefreshResults must be used within a refreshResultsProvider component"
		);
	}

	return contextState;
};

export const RefreshResultsProvider = (props: PropsWithChildren) => {
	const [refreshResults, setRefreshResults] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setRefreshResults(true);
        }, 30000);

        return () => {
            setRefreshResults(false);
        }
    });

	return (
		<refreshResultsContext.Provider value={{ refreshResults, setRefreshResults }}>
			{props.children}
		</refreshResultsContext.Provider>
	);
};
