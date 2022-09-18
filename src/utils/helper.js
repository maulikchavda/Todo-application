export const getLocalStorage = (key) => {
    if(typeof window !== "undefined"){
        localStorage.getItem(key)
    }
}

export const setLocalStorage = (key,value) => {
    if(typeof window !== "undefined"){
        localStorage.setItem(key,value)
    }
}

