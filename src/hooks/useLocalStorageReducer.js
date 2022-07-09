import React, { useReducer, useEffect } from 'react'

function useLocalStorageReducer(key, defValue, reducer)
{
    const [state, dispatch] = useReducer(reducer, defValue, () =>
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
    });
    useEffect(() =>
    {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])
    return [state, dispatch]
}

export { useLocalStorageReducer }
