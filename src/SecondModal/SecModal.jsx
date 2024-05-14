import { X } from 'lucide-react'
import React, { useRef } from 'react'

const SecModal = ({ onClose }) => {
    const secontmodalref = useRef()
    const secontmodalclose = (e) => {
        if (secontmodalref.current === e.target) {
            onClose()
        }
    }
    return (
        <div ref={secontmodalref} onClick={secontmodalclose} className=' fixed inset-0 bg-purple-400 bg-opacity-50 backdrop-blur-sm flex justify-center items-center '>
            <div>
                <button onClick={onClose}> <X /></button>
                <div className=' bg-purple-800 p-20 rounded-md'>
                    <h1 className=' text-3xl font-semibold'>Second Modal</h1>

                </div>
            </div>
        </div>
    )
}

export default SecModal