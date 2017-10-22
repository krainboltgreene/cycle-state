import reduceValues from "@unction/reducevalues"
import selectValues from "@unction/selectvalues"

import type {StimulusType} from "types"
import type {UnaryFunctionType} from "types"
import type {StateType} from "types"
import type {IntentsType} from "types"

import intoState from "./intoState"
import isValidStimulus from "./isValidStimulus"

export default function cycleState (intents: IntentsType): UnaryFunctionType {
  return function cycleStateIntents (initial: StateType): UnaryFunctionType {
    return function cycleStateIntentsInitial (stimuli: Stream<StimulusType>): Stream<StateType> {
      return reduceValues(
        intoState(intents)
      )(
        initial
      )(
        selectValues(
          isValidStimulus
        )(
          stimuli
        )
      )
    }
  }
}
