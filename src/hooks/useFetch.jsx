import React, { useState, useEffect } from 'react'

function useFetch(url) {
    let [data, setData] = useState(null);
    let [isPending, setIsPending] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        let getData = async () => {
            isPending(true);

            try {
                let request = await fetch(url);

                if (!request.ok) {
                    throw new Error(`Something went wrong`);
                }

                let responce = await request.json();
                setData(responce);
                setIsPending(true);
                setError(null);
            } catch (error) {
                console.log(error.message);
                setIsPending(true);
                setError(error.message);
            }
        }

        getData()
    }, [url]);

    return { data, isPending, error };
}

export { useFetch }