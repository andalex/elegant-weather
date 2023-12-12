import React from 'react'
import { Text } from 'ink';


enum MoonPhases {
    NewMoon = "newMoon",
    WaxingCrescent = "waxingCrescent",
    FirstQuarter = "firstQuarter",
    WaxingGibbous = "waxingGibbous",
    FullMoon = "fullMoon",
    WaningGibbous = "waningGibbous",
    LastQuarter = "lastQuarter",
    WaningCrescent = "waningCrescent"
}

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

export const MoonPhaseIcon = (props: Props) => {
  return (
    <>{moonIcons[props.moonPhaseType].icon}{' '}{moonIcons[props.moonPhaseType].displayName}</>
  )
}