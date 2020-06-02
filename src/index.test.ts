import {useBooleanState} from './'
import {renderHook, act} from "@testing-library/react-hooks"


jest.useFakeTimers()

describe.each([true, false])(
  'useBooleanState',
  (initialValue: Boolean) => {
    it('should keep default value', () => {
      const {result} = renderHook(() => useBooleanState(initialValue))

      expect(result.current[0]).toBe(initialValue)
    })


    it('should turn state to true by second tuple element', () => {
      const {result} = renderHook(() => useBooleanState(initialValue))

      const setTrue = result.current[1]

      act(() => setTrue())

      expect(result.current[0]).toBe(true)
    })


    it('should turn state to false by third tuple element', () => {
      const {result} = renderHook(() => useBooleanState(initialValue))

      const setFalse = result.current[2]

      act(() => setFalse())

      expect(result.current[0]).toBe(false)
    })


    it('should invert state by fourth tuple element', () => {
      const {result} = renderHook(() => useBooleanState(initialValue))

      const toggle = result.current[3]

      act(() => toggle())

      expect(result.current[0]).toBe(!initialValue)
    })


    test.each([true, false])(
      'should set value by fifth element',
      (futureValue: Boolean) => {
        const {result} = renderHook(() => useBooleanState(initialValue))

        const setState = result.current[4]

        act(() => setState(futureValue))

        expect(result.current[0]).toBe(futureValue)
      }
    )
  })
