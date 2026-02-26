import React from 'react'

const Filterbutton = ({filter,setFilter}) => {

    
  return (
    <div>
        {/* Filters */}
      <div className="filters
      flex justify-center gap-2
      "
      >
        {["All", "Active", "Completed"].map(status => (
          <button
      
           key={status} onClick={() => setFilter(status)}
          className={filter === status ? "bg-indigo-600 text-white px-3 py-1.5 text-sm rounded-lg" : ""
          + "px-3 py-1.5 text-sm rounded-lg bg-slate-100 hover:bg-slate-200 transition"
          }
          >
            {status}
          </button>
        ))}
      </div>
      
    </div>
  )
}

export default Filterbutton
