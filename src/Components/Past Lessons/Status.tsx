import React from 'react'
type StatusProps = {
  status: string
}


const Status = (props: StatusProps) => {


  let message 
  if(props.status === 'loading'){
    message = 'loading...'
  } else if(props.status === 'success'){
    message = 'Data fetched successfully'
  }else if (props.status === 'error'){
    message = 'Error fetching data'
  }

  return (
    <div>
     status - {message}
    </div>
  )
}

export default Status
