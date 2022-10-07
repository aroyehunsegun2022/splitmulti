import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}

// Language: typescript
// Path: src/components/StoreItem.tsx
// Compare this snippet from src/components/CartItem.tsx:
// import {Button, Stack } from "react-bootstrap";


// export function useLocalStorage<T>(key: string, initialValue: T | (()=> T )){
//         const (value, setValue ) = useState<T>(()=>{
//         const jsonValue = localStorage.getItem(key)
//         if (jsonValue != null) return JSON.parse(jsonValue) 

//         if (typeof initialValue === "function") {
//             return (initialValue as () => T)()
//           } else {
//             return initialValue
//           }
//     })
//     useEffect(()=>{
//         localStorage.setItem(key, JSON.stringify(value))
//     }   ,[key,value])
    
//     return [value, setValue] as [typeof value, typeof setValue]
 

// }