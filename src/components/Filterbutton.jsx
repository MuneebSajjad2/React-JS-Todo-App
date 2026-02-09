import React from 'react'

const Filterbutton = ({filter,setFilter}) => {

    
  return (
    <div>
        {/* Filters */}
      <div className="filters">
        {["All", "Active", "Completed"].map(status => (
          <button key={status} onClick={() => setFilter(status)}
          className={filter === status ? "active" : ""}
          >
            {status}
          </button>
        ))}
      </div>
      
    </div>
  )
}

export default Filterbutton
