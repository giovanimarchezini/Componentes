import React from 'react'

const Error = ({error}) => {
  if(!error) return null
  return (
    <>
     {error && <p>{error}</p>}
    </>
  
  )
}

export default Error;
