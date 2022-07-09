import React, { useState, useEffect } from 'react'

function useLocalStorageState(key, defValue)
{
    const [state, setState] = useState(() =>
    {
        let value;
        try
        {
            value = JSON.parse(window.localStorage.getItem(key) || String(defValue))
        }
        catch (e)
        {
            value = defValue;
        }
        return value;
    })

    useEffect(() =>
    {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])
    return [state, setState]
}

export default useLocalStorageState
