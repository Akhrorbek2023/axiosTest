import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axiosInctance from '../axios/axiosInctanse'
import { useState } from 'react'

const MovieModal = ({ setShowMovieModal }) => {

  const [title, setTitle] = useState("")
  const [img, setImg] = useState("")
  const [rank, setRank] = useState(0)

  const createMovie = async (e) => {
    e.preventDefault()

    const newMovie = {
      title,
      img,
      rank,
    }

    const res = await axiosInctance.post('movie', newMovie)

    if(res.status == 201){
      alert('New Movie is added successfully')
    }
    setTitle('')
    setImg('')
    setRank(0)
    
  }
   

  return (
    <div className='fixed top-0 w-full h-full bg-black bg-opacity-55'>
      <button onClick={() => setShowMovieModal(false)} className='absolute top-10 right-40 text-4xl text-red-500'>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[500px]  bg-white py-7'>
        <h1 className='text-center text-2xl mb-2'>Add new Movie</h1>
        <form onSubmit={createMovie} >
          <input value={title} onChange={(e) => setTitle(e.target.value)} className='p-5 border-[1px] rounded-md mb-2 border-gray-500 w-[95%] ml-[2.5%]' type="text" placeholder='Enter movie title' />
          <input value={img} onChange={(e) => setImg(e.target.value)} className='p-5 border-[1px] rounded-md mb-2 border-gray-500 w-[95%] ml-[2.5%]' type="text" placeholder='Entr movie img' />
          <input value={rank} onChange={(e) => setRank(e.target.value)} className='p-5 border-[1px] rounded-md mb-2 border-gray-500 w-[45%] ml-[2.5%]' type="number" placeholder='Enter movie rank' />
          <button type='submit' className='border-[1px] rounded-md bg-green-500 text-white font-bold p-5 w-[45%] ml-[25px] border-gray-500'>Send</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
