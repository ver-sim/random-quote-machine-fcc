import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import './Quote.scss'

export const Quote = ( { bgColor, color } ) => {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
      try {
          const res = await fetch('https://favqs.com/api/qotd');
          if (!res.ok) {
              console.log(res)
              throw new Error("response is not ok");
          }
          const data = await res.json();
          setQuote(data.quote)
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
    fetchQuote();
  }, [])
  

  return (
    <div id="quote-box">
        {quote && <>
            <blockquote id="text"><i className="fa-solid fa-quote-left"></i>{quote.body}<i className="fa-solid fa-quote-right"></i></blockquote>
            <p id="author">- {quote.author} </p>
            <div id="buttons">
              <button id="new-quote" onClick={() => {fetchQuote(); bgColor()}} style={{background: color}} >New Quote</button>
              <a href={`https://twitter.com/intent/tweet?=text${quote.body}`} id="tweet-quote" target="_blank" >
              <i className="fa-brands fa-x-twitter fa-xl" style={{color: '#000000'}}></i>
              </a>
            </div>
        </>}        
    </div>
  )
}

Quote.propTypes = {
  bgColor: PropTypes.func.isRequired,
  color: PropTypes.array.isRequired
}