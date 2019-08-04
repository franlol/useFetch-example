import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ status: false, message: '' });

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError({ status: true, message: error.message });
                setLoading(false);
            }
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { data, loading, error };
}

export default useFetch;
