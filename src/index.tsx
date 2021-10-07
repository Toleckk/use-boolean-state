import {useCallback, useState} from "react"

export const useBooleanState = (initialState: boolean): [boolean, () => void, () => void, () => void, (state: boolean) => void] => {
  const [state, setState] = useState(initialState)

  const setTrue = useCallback(() => setState(true), [setState])
  const setFalse = useCallback(() => setState(false), [setState])
  const toggle = useCallback(() => setState(state => !state), [setState])

  return [state, setTrue, setFalse, toggle, setState]
}

export default useBooleanState
