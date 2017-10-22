/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import intoState from "./"

const intents = {
  incrementCount: (state) => () => (payload) => ({
    ...state,
    count: state.count + payload.count,
  }),
}
const initial = {count: 1}

test(({same, end}) => {
  const stimulus = {
    name: "incrementCount",
    payload: {count: 1},
  }

  same(
    intoState(intents)(initial)(stimulus),
    {count: 2}
  )

  end()
})

test(({same, end}) => {
  const stimulus = {
    name: "example",
    payload: {count: 1},
  }

  same(
    intoState(intents)(initial)(stimulus),
    {count: 1}
  )

  end()
})
