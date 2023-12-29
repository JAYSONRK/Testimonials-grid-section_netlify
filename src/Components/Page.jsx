import React from "react";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import SectionE from "./SectionE";

const Page = () => {
  return (<>
    <main className="page container-fluid">
      <div className="row g-4">
        <div className="col-md-9">
          <div className="row">
            <SectionA/>
            <SectionB/>
            <SectionC/>
            <SectionD/>
          </div>
        </div>
        <SectionE/>
      </div>
    </main>
  </>);
}

export default Page;