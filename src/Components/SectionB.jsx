import React from "react";
import ProfileB from "../images/image-jonathan.jpg";
import Common from "./Common";

const SectionB = () => {
  return (<>
    <section className="col-12 col-md-4">
        <div className="second section  mx-2">
          <Common
              imgscr={ProfileB}
              name={'Jonathan Walters'}
              quote={'The team was very supportive and kept me motivated'}
              subquote={'“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”'}
          />
        </div>
    </section>
  </>);
}

export default SectionB;