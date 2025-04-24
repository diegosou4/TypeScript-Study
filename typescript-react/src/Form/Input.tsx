import React from 'react'

const Input = () => {
  return (
    <input type='text' className='border-2 border-gray-200 bg-gray-100 rounded-md p-1 focus:outline-cyan-400 ml-2' />
  )
}

const InputRest = ({label, id, type,...props} : any) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id}  className='border-2 border-gray-200 bg-gray-100 rounded-md p-1 focus:outline-cyan-400 ml-2' type={type ? type : 'text' } {...props} />
    </div>


  )


}

export default {
  Input,
  InputRest
}
