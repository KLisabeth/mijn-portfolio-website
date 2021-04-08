import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
function loading() {
    return (
        <div className="loading_notice">
        <Spinner animation="border" role="status">
       <span className="sr-only">Loading...</span>
         </Spinner>
        </div>
    )
}

export default loading
