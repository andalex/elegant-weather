import React, {
	useContext,
	useState,
	createContext,
	PropsWithChildren,
	Dispatch,
	SetStateAction,
    useEffect,
} from "react";
import { useStdoutDimensions } from "../utils/useStdoutDimensions.js";

export  enum Layout {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg'
}

// Text columns
enum LayoutBreakPointSizes {
    xs = 60,
    sm = 80,
    md = 102,
    lg = 140
}

type TResponsiveLayoutContextState = {
    layoutType: Layout
};

const responsiveLayoutContext = createContext<TResponsiveLayoutContextState>({
    layoutType: Layout.md
});

export const useResponsiveLayout = () => {
	const contextState = useContext(responsiveLayoutContext);

	if (contextState === undefined) {
		throw new Error(
			"userefreshResults must be used within a ResponsiveLayoutProvider component"
		);
	}

	return contextState;
};

const getLayoutSize = (columns: number) => {
    switch (true) {
        case columns < LayoutBreakPointSizes.sm:
             return Layout.xs
        case columns < LayoutBreakPointSizes.md:
             return Layout.sm;
        case columns < LayoutBreakPointSizes.lg:
             return Layout.md;
        case columns >= LayoutBreakPointSizes.lg:
             return Layout.lg;
        default:
             return Layout.md;
    }
}       

export const ResponsiveLayoutProvider = (props: PropsWithChildren) => {
	const [layout, setLayout] = useState(Layout.md);
    const [columns] = useStdoutDimensions();

    useEffect(() => {
        setLayout(getLayoutSize(columns));
    }, [columns])

	return (
		<responsiveLayoutContext.Provider value={{ layoutType: layout }}>
			{props.children}
		</responsiveLayoutContext.Provider>
	);
};
