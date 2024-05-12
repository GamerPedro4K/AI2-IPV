import React from 'react'

const PageNotFound = (props) => {
  return (
    <div className='row text-center' style={{marginTop: '50px'}}>
      <div className='col-12'>
        <div style={{fontSize: '76px'}}>404</div>
      </div>
      <div className='col-12'>
      <div>Page not found</div>

      </div>
      <div className='col-12'>
        <button className='btn btn-danger margin-t-50 submitButton active-mathgame' style={{maxWidth: "440px"}} onClick={() => window.location.href = "/"} >Redirect to Homepage!</button>
      </div>
    </div>
  )
}

export default PageNotFound;