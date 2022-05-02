import styled from '@emotion/styled'
import React from 'react'

const Quote=styled.div`
  max-width: 70rem;
  width: 90%;
  margin: 0 auto;
  background-color: ${props => props.quoteColor ? props.quoteColor: ""};
  padding: 2rem;
  border: .5rem solid black;
`

const Text=styled.p`
   display: flex;
   flex-direction: column;
   text-align: center;
   font-size: 2rem;
   gap: 1rem;
span{
    font-size: 1.6rem;
   font-weight: bold;
}
`

const QuoteBox = ({quoteObj,color}) => {
   const {quote,author}=quoteObj
  return (
    <Quote quoteColor={color}>
        <Text >{quote}<span>{author}</span></Text>
    </Quote>
  )
}

export default QuoteBox