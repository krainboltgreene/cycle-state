import key from "@unction/key"
import isType from "@unction/istype"
import equals from "@unction/equals"

export default function isValidStimulus ({event: {type}, trigger}: StimulusType): boolean {
  return !isType("undefined")(trigger) && equals(trigger)(type)
}
