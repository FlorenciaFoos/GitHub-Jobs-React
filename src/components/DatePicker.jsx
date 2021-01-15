import React from "react";



function DatePicker({ photoData, handleDate }) {

    return (
        <div className='picker'>
            <label htmlFor="start">Elige otra fecha</label>

            <input type="date" onChange={handleDate} id="start" name="start"

                min="1995-06-16" max={photoData.date}></input>
        </div>
    )
}

export default DatePicker

