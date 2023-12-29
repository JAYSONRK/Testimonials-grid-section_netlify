import React from "react";

const Common = (prop) => {
  return (<>
        <div className="header">
            <div className="profile-img">
                <img src={prop.imgscr} alt="profile"/>
            </div>
            <div className="name">
                <h6>{prop.name}</h6>
                <p>Verified Graduate</p>
            </div>
        </div>
        <article>
            <h4>{prop.quote}</h4>
            <p>{prop.subquote}</p>
        </article>
  </>);
}

export default Common;