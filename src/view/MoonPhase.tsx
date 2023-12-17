import React from 'react'
import { Text } from 'ink';
import { useTheme } from '../providers/ThemeProvider.js';
import { MoonPhases } from '../types/moonPhase.js';


type TMoonPhases = {
    [MoonPhase in MoonPhases]: {
        icon: string;
        displayName: string
    };
};

// TODO may not need display name, just use what the API gives.
const moonIcons: TMoonPhases = {
    newMoon: { icon: "🌑", displayName: 'New Moon' },
    waxingCrescent: { icon: '🌒', displayName: 'Waxing Crescent'},
    firstQuarter: { icon: '🌓', displayName: 'First Quarter'},
    waxingGibbous: { icon: '🌔', displayName: 'Waxing Gibbous'},
    fullMoon: { icon: '🌕', displayName: 'Full Moon'},
    waningGibbous: { icon: '🌖', displayName: 'Waning Gibbous'},
    lastQuarter: { icon: '🌗', displayName: 'Last Quarter'},
    waningCrescent: { icon: '🌘', displayName: 'Waning Crescent'},
}


type Props = {
    moonPhaseType: MoonPhases
}

export const MoonPhase = (props: Props) => {
    const { theme: { styles } } = useTheme();
  return (
    <Text color={styles.secondaryElement} wrap="truncate-middle">
        {moonIcons[props.moonPhaseType].icon}{' '}{moonIcons[props.moonPhaseType].displayName}
    </Text>
  )
}