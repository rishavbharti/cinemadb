import React from 'react';

function Dropdown(props)
{
  // const handleChange = () => {
  //   return;
  // }

  return(
      <div className="dropdown">
          <select value={props.status} onChange={(e) => props.handleChange(e.target.value)}>
              <option value="" disabled>Move to...</option>
              <option value="watching">Currently Watching</option>
              <option value="wishToWatch">Wish to Watch</option> 
              <option value="watched">Watched</option>
              <option value="none">None</option>
          </select>
      </div>
    )
}

export default Dropdown;

// 📹 ❤️ ✔️