import React, { useState } from 'react'
import Modal from './Modal'

const Modalbtn = () => {
    const [Showmodal, setShowmodal] = useState(false)
    return (
        <div>
            <div className='flex justify-center items-center flex-col mt-20'>
                <div className=" text-2xl">Practies Modal</div>
                <button
                    onClick={() => setShowmodal(true)}
                    className=' px-5 py-2 bg-blue-500 text-white  font-semibold rounded mt-10 '>Opan Modal</button>

            </div>
            {Showmodal && <Modal onClose={() => setShowmodal(false)} />}
        </div>
    )
}

export default Modalbtn