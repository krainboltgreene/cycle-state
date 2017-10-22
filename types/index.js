export type StimulusType = {event: {type: string}, trigger: string, name: string, payload: mixed}
export type PayloadType = mixed
export type StateType = {[key: string]: Array<mixed> | Object | Map | Set | string | number | boolean | null}
export type IntentsType = {[key: string]: StateType => StimulusTypeboth => PayloadType => StateType}
export type PredicateFunctionType = mixed => boolean
export type UnaryFunctionType = mixed => mixed
