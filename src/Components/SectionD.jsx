import React from "react";
import ProfileD from "../images/image-patrick.jpg";
import Common from "./Common";

const SectionD = () => {
  return (<>
    <section className="col-12 col-md-8">
      <div className="fourth section mx-3">
        <Common
            imgscr={ProfileD}
            name={'Patrick Abrams'}
            quote={'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.'}
            subquote={'“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”'}
        />
      </div>
    </section>
  </>);
}

export default SectionD;