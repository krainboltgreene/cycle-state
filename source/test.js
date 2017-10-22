/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"
import streamSatisfies from "@unction/streamsatisfies"
import xstream from "xstream"

import cycleState from "./"

const intents = {
  incrementCount: (state) => () => (payload) => ({
    ...state,
    count: state.count + payload.count,
  }),
}
const initial = {count: 1}

test(({same, end}) => {
  const stimuli = xstream.of({
    event: {type: "click"},
    trigger: "click",
    name: "incrementCount",
    payload: {count: 1},
  })

  streamSatisfies(
    "{count: 1}---{count: 2}---|"
  )(
    (given) => (expected) => same(given, expected)
  )(
    () => () => end()
  )(
    cycleState(intents)(initial)(stimuli)
  )
})
