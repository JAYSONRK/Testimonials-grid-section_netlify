import React from "react";
import ProfileC from "../images/image-jeanette.jpg";
import Common from "./Common";

const SectionC = () => {
  return (<>
    <section className="col-12 col-md-4">
      <div className="third section  mx-3">
        <Common
            imgscr={ProfileC}
            name={'Jeanette Harmon'}
            quote={'An overall wonderful and rewarding experience'}
            subquote={' “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”'}
        />
      </div>
    </section>
  </>);
}

export default SectionC;