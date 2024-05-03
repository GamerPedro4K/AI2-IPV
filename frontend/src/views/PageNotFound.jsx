import React from 'react'

export default function PageNotFound(){
  return (
	<div className='gamesFlex d-center bgColor flex-column'>
        <div className='text-404' style={{fontSize: '76px', color:'white'}}>404</div>
        <div className='text-404'>Page not found</div>
        <button className='margin-t-50 submitButton active-mathgame' style={{maxWidth: "440px"}} onClick={() => window.location.href = "/"} >Redirect to Homepage!</button>
    </div>
  )
}