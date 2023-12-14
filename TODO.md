# Elegant Weather Dev TODO
[ ] Persist options config selections by end user
[ ] Work on NPM and publishing stuff
[ ] Infra for storing API secret (AWS Secrets manager w Lambda ?)
[ ] Componetize better -- break apart common layout components, and better organize the app structure. Consider common props perhaps? since Ink is so declarative
    - Do this in phases -- first phase, as organizational and little code change as possible, i.e. if you can just break something out to a file do that.
    - Phase two -- actually break out common patterns like a row component or a forecastDay.
[ ] Add precip. warnings (i.e. No rain for the next hour / Rain starting for the next 60min)
[ ] Add weather alerts section (NOAA alerts);
[ ] Add tests
[ ] Form validation that days can only be input as number
[ ] Roadmap MVP Features, and post MVP features.
[ ] Cleanup emoji box rendering issue


In Progress
[ ] Swap current conditions UI over to RealTime API: https://www.weatherapi.com/docs/#apis-realtime

Done
[X] Add UI themeing
[X] Add expandable panels
[X] Show time and date in the app
[X] Fix issue where API is only returning 3 days of forecast no matter how many days are in the query
[X] Fix input select form control issue
