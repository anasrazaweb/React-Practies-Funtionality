import { X } from 'lucide-react'
import React, { useRef } from 'react'

const Modal = ({ onClose }) => {

  const Modalref = useRef()
  const CloseModal =(e)=>{
    if(Modalref.current===e.target){
      onClose()
    }
  }
  
  return (
    <div ref={Modalref} onClick={CloseModal} className=' fixed inset-0 bg-blue-400 bg-opacity-55 backdrop-blur-sm flex justify-center items-center'>



      <div className=' w-1/2 bg-blue-500 p-5 rounded-lg text-white space-y-5' >
        <button onClick={onClose}><X /></button>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores reprehenderit, perferendis doloremque illum vel deserunt tempora sequi praesentium iure blanditiis soluta vitae minima pariatur, sapiente harum alias numquam eveniet cupiditate!
          <h1>Dowlond Free E-Book</h1>
          <button className=' px-5 py-2 bg-blue-700 text-white rounded-xl mt-5'>Dowlond</button>
        </div>
      </div>




    </div>
  )
}

export default Modal