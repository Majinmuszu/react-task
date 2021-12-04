import React, { useState, useEffect } from "react";

const Quote = () => {
  const [quotes, setQuotes] = useState("[]");
  const [loading, setLoading] = useState(false);
  const fetchQuoteAndAuthor = () => {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((response) => response.json())
      .then((response) => {
        setQuotes(response);
        //console.log(response);
      })
      .catch(console.log);
  };
  const n = 0;
  const incrN = () => {
    n + 1;
    console.log(n);
  };
  console.log(quotes);
  useEffect(() => {
    setLoading(true);
    fetchQuoteAndAuthor();
    setLoading(false);
  }, []);
  return (
    <div>
      <p>{loading ? "Loading..." : quotes[n].quote}</p>
      <button onClick={incrN}>New Quote</button>
    </div>
  );
};

export default Quote;
