// Setup HTML page. This is served when receiving GET method on /.
//  The page should also contain a number input textbox specifying minutes to wait.
// Setup screen (how?)
// Setup button (how?)

// When starting app, should get current system time (assume OS handles time sync - TODO handle this yourself?)
// Every second, should have a callback which does the following
// - update the current time on screen
// - check if to start timer, start if set to start. Reset if to reset.
//  - If timer in progress, update timer.
// - Updating timer value should have no effect on the current timer, until a new time session is started.

// How timer should work
//  - Pressing button should start timer. Should have a default e.g. 30 mins (1800s)
//  - Timer should be able to infinitely go negative. When timer is negative, flash light e.g. every 1s.
//  - Pressing should enter 'rest' mode. Should count up. (TODO display target). Light should stay on.
//  - Pressing in rest mode will return to 'active mode' if rest mode target is reached. Otherwise just flash light.
//  - Active mode will reset timer.
//  - Holding button for 2s will stop the timer completely.

// => There should be multiple textboxes
//  - one for target timer
//  - another for target rest time.

// TODO - logging
