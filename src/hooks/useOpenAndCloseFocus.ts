import React, {useEffect} from 'react'
import {iterateFocusableElements} from '../utils/iterateFocusableElements'

export type UseOpenAndCloseFocusSettings = {
  initialFocusRef?: React.RefObject<HTMLElement>
  containerRef: React.RefObject<HTMLElement>
  returnFocusRef: React.RefObject<HTMLElement>
  preventFocusOnOpen?: boolean
}

export function useOpenAndCloseFocus({
  initialFocusRef,
  returnFocusRef,
  containerRef,
  preventFocusOnOpen
}: UseOpenAndCloseFocusSettings): void {
  useEffect(() => {
    if (preventFocusOnOpen) {
      return
    }
    const returnRef = returnFocusRef.current
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus()
    } else if (containerRef.current) {
      const firstItem = iterateFocusableElements(containerRef.current).next().value
      firstItem?.focus()
    }
    return function () {
      returnRef?.focus()
    }
  }, [initialFocusRef, returnFocusRef, containerRef, preventFocusOnOpen])
}
