import { useState, useEffect } from 'react';

export default function useContact(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/agenda')
        .then((res) => {
            if(!res.ok) throw new Error("Erro ao buscar contatos");
            return res.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    return { data, loading, error };
}