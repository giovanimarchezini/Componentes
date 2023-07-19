import React from 'react'

const Error = ({error}) => {
  return (
    <>
     {error && <p>{error}</p>}
    </>
  
  )
}

export default Error;
