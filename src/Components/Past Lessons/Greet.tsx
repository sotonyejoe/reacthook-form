import React from 'react'

type GreetProps = {
    name: string 
    messageCount: number
    isLoggedIn: boolean
}
const Greet = (props: GreetProps) => {

   

  return (
    <div>
      {
        props.isLoggedIn ? 
        `Welcome to Learning React plus Typescript,
         ${props.name} have ${props.messageCount} Messages ` 
         : 'Welcome Guest'
      }
    </div>
  )
}

export default Greet
