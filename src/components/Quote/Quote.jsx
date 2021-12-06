import React from "react";
import s from './Quote.module.css'

const Quote = ({ quote }) => {
  return (
    <div>
      {quote === undefined ? (
        <p className={s.error}>Whoops, no quotes here... Click &#127922; to see more :)</p>
      ) : (
        <div className={s.wrapper}>
          <p className={s.quote}>&ldquo;{quote.quote}&bdquo;</p>
          <p className={s.author}>~{quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
