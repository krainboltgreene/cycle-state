import key from "@unction/key"

import type {StimulusType} from "types"
import type {UnaryFunctionType} from "types"
import type {StateType} from "types"
import type {IntentsType} from "types"

export default function intoState (intents: IntentsType): UnaryFunctionType {
  return function intoStateIntents (state: StateType): UnaryFunctionType {
    return function intoStateIntentsState (stimulus: StimulusType): StateType {
      const {name} = stimulus
      const {payload} = stimulus
      const reaction = key(name)(intents)

      if (!reaction) {
        return state
      }

      return reaction(state)(stimulus)(payload)
    }
  }
}
