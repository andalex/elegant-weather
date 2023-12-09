import React from 'react'
import { Text } from 'ink';

enum WeatherCondition {
    Blizzard = "blizzard",
    BlowingSnow = "blowingSnow",
    Clear = "clear",
    Cloudy = "cloudy",
    Fog = "fog",
    FreezingDrizzle = "freezingDrizzle",
    FreezingFog = "freezingFog",
    HeavyFreezingDrizzle = "heavyFreezingDrizzle",
    HeavyRain = "heavyRain",
    HeavyRainAtTimes = "heavyRainAtTimes",
    HeavySnow = "heavySnow",
    IcePellets = "icePellets",
    LightDrizzle = "lightDrizzle",
    LightFreezingRain = "lightFreezingRain",
    LightRain = "lightRain",
    LightRainShower = "lightRainShower",
    LightShowersOfIcePellets = "lightShowersOfIcePellets",
    LightSleet = "lightSleet",
    LightSleetShowers = "lightSleetShowers",
    LightSnow = "lightSnow",
    LightSnowShowers = "lightSnowShowers",
    Mist = "mist",
    ModerateOrHeavyFreezingRain = "moderateOrHeavyFreezingRain",
    ModerateOrHeavyRainShower = "moderateOrHeavyRainShower",
    ModerateOrHeavyRainWithThunder = "moderateOrHeavyRainWithThunder",
    ModerateOrHeavyShowersOfIcePellets = "moderateOrHeavyShowersOfIcePellets",
    ModerateOrHeavySleet = "moderateOrHeavySleet",
    ModerateOrHeavySleetShowers = "moderateOrHeavySleetShowers",
    ModerateOrHeavySnowShowers = "moderateOrHeavySnowShowers",
    ModerateOrHeavySnowWithThunder = "moderateOrHeavySnowWithThunder",
    ModerateRain = "moderateRain",
    ModerateRainAtTimes = "moderateRainAtTimes",
    ModerateSnow = "moderateSnow",
    Overcast = "overcast",
    PartlyCloudy = "partlyCloudy",
    PatchyFreezingDrizzlePossible = "patchyFreezingDrizzlePossible",
    PatchyHeavySnow = "patchyHeavySnow",
    PatchyLightDrizzle = "patchyLightDrizzle",
    PatchyLightRain = "patchyLightRain",
    PatchyLightRainWithThunder = "patchyLightRainWithThunder",
    PatchyLightSnow = "patchyLightSnow",
    PatchyLightSnowWithThunder = "patchyLightSnowWithThunder",
    PatchyModerateSnow = "patchyModerateSnow",
    PatchyRainPossible = "patchyRainPossible",
    PatchySleetPossible = "patchySleetPossible",
    PatchySnowPossible = "patchySnowPossible",
    Sunny = "sunny",
    ThunderyOutbreaksPossible = "thunderyOutbreaksPossible",
    TorrentialRainShower = "torrentialRainShower",
}

type WeatherConditions = {
    [Condition in WeatherCondition]: {
        icon: string;
    };
};

const conditions: WeatherConditions = {
	blizzard: { icon: "❄️ ❄️ ❄️" },
	blowingSnow: { icon: "🌬️ ❄️" },
	clear: { icon: "☀️" },
	cloudy: { icon: "☁" },
	fog: { icon: "🌫️" },
	freezingDrizzle: { icon: "❄️ 🌧️" },
	freezingFog: { icon: "🌬️ 🌫️" },
	heavyFreezingDrizzle: { icon: "❄️ 🌧️" },
	heavyRain: { icon: "🌧️" },
	heavyRainAtTimes: { icon: "🌧️" },
	heavySnow: { icon: "🌨️" },
	icePellets: { icon: "❄️ 🌧️" },
	lightDrizzle: { icon: "🌧️" },
	lightFreezingRain: { icon: "❄️ 🌧️" },
	lightRain: { icon: "🌧️" },
	lightRainShower: { icon: "🌦️ 🌧️" },
	lightShowersOfIcePellets: { icon: "❄️ 🌧️" },
	lightSleet: { icon: "🌨️ ❄️" },
	lightSleetShowers: { icon: "🌨️ ❄️ 🌧️" },
	lightSnow: { icon: "🌨️" },
	lightSnowShowers: { icon: "🌨️ 🌧️" },
	mist: { icon: "🌫️" },
	moderateOrHeavyFreezingRain: { icon: "❄️ 🌧️" },
	moderateOrHeavyRainShower: { icon: "🌦️ 🌧️" },
	moderateOrHeavyRainWithThunder: { icon: "⚡ 🌧️" },
	moderateOrHeavyShowersOfIcePellets: { icon: "❄️ 🌧️" },
	moderateOrHeavySleet: { icon: "🌨️ ❄️" },
	moderateOrHeavySleetShowers: { icon: "🌨️ ❄️ 🌧️" },
	moderateOrHeavySnowShowers: { icon: "🌨️ 🌧️" },
	moderateOrHeavySnowWithThunder: { icon: "⚡ 🌨️" },
	moderateRain: { icon: "🌧️" },
	moderateRainAtTimes: { icon: "🌧️" },
	moderateSnow: { icon: "🌨️" },
	overcast: { icon: "⛅" },
	partlyCloudy: { icon: "⛅" },
	patchyFreezingDrizzlePossible: { icon: "🌨️ ❄️ 🌧️" },
	patchyHeavySnow: { icon: "🌨️" },
	patchyLightDrizzle: { icon: "🌧️" },
	patchyLightRain: { icon: "🌧️" },
	patchyLightRainWithThunder: { icon: "⚡ 🌧️" },
	patchyLightSnow: { icon: "🌨️" },
	patchyLightSnowWithThunder: { icon: "⚡ 🌨️" },
	patchyModerateSnow: { icon: "🌨️" },
	patchyRainPossible: { icon: "🌦️" },
	patchySleetPossible: { icon: "🌨️ ❄️" },
	patchySnowPossible: { icon: "🌨️" },
	sunny: { icon: "☀️" },
	thunderyOutbreaksPossible: { icon: "⚡" },
	torrentialRainShower: { icon: "🌦️ 🌧️" },
};

type TConditionIconProps = {
    conditionType: WeatherCondition
}

export const ConditionIcon = (props: TConditionIconProps) => {
  return (
    <>{conditions[props.conditionType].icon}</>
  )
}
