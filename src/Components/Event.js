import React from 'react';
const Event = ({ eventname,imageSrc, tagline, date, time }) => {
    return (
        <div className="card text-light bg-info p-2">
        <div className="h-100"   style={{
                      height: "300px",
                    }}> {/* Add this div with h-100 */}
          <img src={imageSrc} alt="Event" className="card-img-top p-1" style={{ width: '100%', maxHeight: '250px', objectFit: 'fill' }} />
          <div className="card-body bg-info">
            <h5 className="card-title text-left">{eventname}</h5>
            <p className="card-text">{date} at {time}</p>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      
    );
}
export default Event;