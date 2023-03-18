import React, {useEffect, useState} from 'react';
import useSWR from 'swr';

const LastSalesPage = () => {
    const [sales, setSales] = useState()
    // const [loading, setLoading] = useState(false)

    const {data, error} = useSWR('https://nextjs-course-7d5d0-default-rtdb.firebaseio.com/sales.json');
    console.log("data", data)

    useEffect(() => {
        if (data) {
            const transformedSales = [];

            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].Volumn
                })
            }
            setSales(transformedSales)
        }
    }, [data])

    // useEffect(() =>{
    //     setLoading(true)
    {/*    fetch("https://nextjs-course-7d5d0-default-rtdb.firebaseio.com/sales.json").then((res) =>{*/
    }
    {/*        res.json().then((data) => {*/
    }
    {/*             const transformedSales = [];*/
    }
    //
    //             for (const key in data){
    //                 transformedSales.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].Volumn
    //                 })
    //             }
    //
    //             setLoading(false)
    //             setSales(transformedSales)
    //         })
    //     })
    // },[])

    if (error) {
        return <p>Failed to load</p>
    }


    if (!data || !sales) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <ul>
                {sales.map((item, index) => {
                    return (
                        <li key={item.id}>{item.username} - {item.volume}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default LastSalesPage;