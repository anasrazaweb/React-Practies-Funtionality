import React, { useState } from 'react'
import SecModal from './SecModal'

const SecModalBtn = () => {
    const [secondmodal, setsecondmodal] = useState(false)
    return (
        <div>
            <div className=' flex justify-center items-center text-center mt-10'>
                <div>
                    <h1 className=' text-2xl '>Second Modal</h1>
                    <button
                        onClick={() => setsecondmodal(true)}
                        className=' px-5 py-2 bg-purple-700 text-white font-semibold mt-5 rounded'>Second Modal Opan</button>
                </div>
            </div>
            {secondmodal && <SecModal onClose={()=>setsecondmodal(false)} />}
        </div>
    )
}

export default SecModalBtn