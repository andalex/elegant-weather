# Elegant Weather Dev TODO
1 [ ] Work on NPM and publishing stuff

1 [ ] Infra for storing API secret (AWS Secrets manager w Lambda ?)

1 [ ] Componetize better -- break apart common layout components, and better organize the app structure. Consider common props perhaps? since Ink is so declarative
    - Do this in phases -- first phase, as organizational and little code change as possible, i.e. if you can just break something out to a file do that.
    - Phase two -- actually break out common patterns like a row component or a forecastDay.

2 [ ] Add precip. warnings (i.e. No rain for the next hour / Rain starting for the next 60min)

2 [ ] Add intro/welcome/setup experience before the main app, for users that land after using NPX ? 
    - Maybe this just needs to be a `?` keyboard shortcut at the top that helps provide any useful UX info... the app is #prettyStraightForward.

2 [ ] Add different App sizes based on the users desired terminal window size.
    - Condensed/widget, small, full, extended.
    - Use the hook for the terminal window resize provided from ink.

2 [ ] Add weather alerts section (NOAA alerts);

1 [ ] Add tests


1 [ ] Roadmap MVP Features, and post MVP features.

2 [ ] Cleanup emoji box rendering issue


In Progress
[ ] Sensible error-boundaries
[ ] Persist location
[ ] Persist Temp Scale
[ ] Add more drops emoj for more rain

Non-MVP
[ ] Swap current conditions UI over to RealTime API: https://www.weatherapi.com/docs/#apis-realtime (see if it matters using this API)

Done
[X] Form validation that days can only be input as number
[X] Persist options config selections by end user
[X] Add UI themeing
[X] Add expandable panels
[X] Show time and date in the app
[X] Fix issue where API is only returning 3 days of forecast no matter how many days are in the query
[X] Fix input select form control issue
