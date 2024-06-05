import React from 'react'

const ResetButton =({onPress}) =>{
  return (
    <div>
    <button onClick={onPress}
    className='btn btn-primary m-4'>
        Reset Game
    </button>
    </div>
  )
}

export default ResetButton