import { useState } from 'react'
import MovieModal from './MovieModal'
import GetMovies from './GetMovies'

const MovieHeader = () => {
    const [showMovieModal, setShowMovieModal] = useState(false)
  return (
   <>
     <div className='py-5'>
        <div className="container px-4 mx-auto">
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>My favourite Movies</h1>
                <button onClick={() => setShowMovieModal(true)} className='bg-red-400 rounded-md py-3 px-6 text-white hover:scale-105'>Add Movie</button>
            </div>
        </div>
    </div>
    {
        showMovieModal && <MovieModal setShowMovieModal={setShowMovieModal}/>
    }
    <GetMovies/>
   </>
  )
}

export default MovieHeader