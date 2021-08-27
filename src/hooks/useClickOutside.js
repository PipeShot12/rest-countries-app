import { useEffect, useRef } from 'react'

const useClickOutside = (cb) => {
  const nodeRef = useRef()
  useEffect(() => {
    const hadler = event => {
      !nodeRef.current?.contains(event.target) && cb()
    }
    document.addEventListener('mousedown', hadler)
    return () => document.removeEventListener('mousedown', hadler)
  })
  return nodeRef
}
export default useClickOutside
