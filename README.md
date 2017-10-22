# cycle-state

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

Create a stream of state for your view layer in cycle

## Usage

Alright, so you've got a simple Cycle.js application built:

``` javascript
import xstream from "xstream"

function application (state) {
  return p({
    inner: `Hello, world! My nam  e is ${state.author.name}`,
  })
}

function cycle (sources) {
  const state = sources.DOM.events("click")
  const view = state.map(application)

  return {
    DOM: view,
  }
}
const drivers = {
  DOM: makeDOMDriver("body"),
}

run(cycle, drivers)
```

Here you're mapping click events into a state. Wouldn't it be cool if we could redux this bitch:

``` javascript
const intents = {
  openModal: (state) => (event) => (payload) => {
    return {
      ...state,
      modal: true,
    }
  }
}
const initialState = {
  openModal: false,
}

function cycle (sources) {
  const state = cycleState(
    intents
  )(
    initialState
  )(
    sources.DOM.events("click")
  )
  const view = state.map(application)

  return {
    DOM: view,
  }
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/krainboltgreene/cycle-state.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/krainboltgreene/cycle-state.svg?maxAge=2592000&style=flat-square
