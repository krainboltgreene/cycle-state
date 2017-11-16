/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import isValidStimulus from "./"

test(({ok, end}) => {
  const stimulus = {
    event: {type: "test"},
    trigger: "test",
  }

  ok(
    isValidStimulus(stimulus)
  )

  end()
})

test(({notOk, end}) => {
  const stimulus = {trigger: "test"}

  notOk(
    isValidStimulus(stimulus)
  )

  end()
})
