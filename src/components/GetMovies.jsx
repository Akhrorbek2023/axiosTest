import React, { useEffect, useState } from 'react'
import axiosInctanse from '../axios/axiosInctanse'

const GetMovies = () => {

    const [data, setData] = useState([])
  
    const getMovie = async () => {
        const res = await axiosInctanse.get('movie')
        setData(res.data)
    }

    useEffect(() => {
        getMovie()
    }, [data])

  return (
    <div>
        <div className="container px-4 mx-auto">
            <div>
                {
                    data.map((d) => (
                        <div key={d.id}>
                            <img src={d.img} alt="" />
                            <h1>{d.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default GetMovies