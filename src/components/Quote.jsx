import React from 'react'

const Quote = ({quote}) => {
  return (
    <div>
      {quote === undefined 
        ? <p>Whoops, no quotes here... Click &#127922; to see more :)</p>
        : <p>&ldquo;{quote.quote}&bdquo;<br/>~{quote.author}</p>
        }
    </div>
  )
}

export default Quote
