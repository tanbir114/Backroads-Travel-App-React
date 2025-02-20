import React from 'react'

const Title = ({normalText, highlightedText}) => {
  return (
    <div className="section-title">
      <h2>
        {normalText} <span>{highlightedText}</span>
      </h2>
    </div>
  );
}

export default Title
