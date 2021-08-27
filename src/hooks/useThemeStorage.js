const { useState, useEffect } = require('react')

const useThemeStorage = (key) => {
  const [storageTheme, setStorageTheme] = useState(() => {
    const saveTheme = window.localStorage.getItem(key)
    if (saveTheme !== null) return JSON.parse(saveTheme)
    else return 'light'
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageTheme))
  }, [key, storageTheme])

  return { storageTheme, setStorageTheme }
}
export default useThemeStorage
