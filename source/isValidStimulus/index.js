import isType from "@unction/istype"
import equals from "@unction/equals"

export default function isValidStimulus (stimulus: StimulusType): boolean {
  const {event = {}} = stimulus
  const {type} = event
  const {trigger} = stimulus

  return !isType("undefined")(trigger) && equals(trigger)(type)
}
