import React, { useState } from 'react'

const Likes = () => {
  const [totalLikes, setTotalLikes] = useState(0)

  const handleClick = (e) => {
    setTotalLikes(totalLikes + 1)
  }
  const handleClicks = (e) => {
    setTotalLikes(totalLikes - 1)
  }

  return (
    <div>
      <div className={totalLikes}>{totalLikes}</div>
      <button className="minus" onClick={handleClicks}>
        -
      </button>
      <button className="plus" onClick={handleClick}>
        +
      </button>
    </div>
  )
}

export default Likes
