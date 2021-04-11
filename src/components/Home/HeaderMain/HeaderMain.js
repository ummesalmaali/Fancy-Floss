import React from "react";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main style={{height:'600px'}} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
          <h1 style={{color:'#3A4256'}}>A great life leads to a <br/> Beautiful smile </h1>
          <p className='text-secondary'>Your efforts will pay off in the short run if they go along with a great exposure campaign. You will have more people coming for checkups, and your established costumers will increase their trust in you. It’s a win-win situation!</p>
          <button className="btn btn-primary">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6 mt-5 pt-5">
        <img src={chair} alt="" className="image-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
