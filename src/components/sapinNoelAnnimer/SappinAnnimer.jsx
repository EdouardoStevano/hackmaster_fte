import React from "react";
import "./sappinAnnimer.scss";
import { InView } from "react-intersection-observer";
import { useState } from "react";
const SappinAnnimer = () => {
  const [view, setView] = useState(false);

  function handleView(inview) {
    if (inview) {
      setView(true);
    } else {
    }
  }
  return (
    <InView onChange={handleView}>
      <div className={`SappinNoel-aanime ${view ? "active" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="95.185"
          height="155.713"
          viewBox="0 0 95.185 155.713"
        >
          <g
            id="Composant_2_1"
            data-name="Composant 2 – 1"
            transform="translate(0.172 1.095)"
          >
            <path
              id="Trace-sapin-1"
              data-name="Tracé 2"
              d="M473,2630.585v-11.122l44.26-16.582s-20.551.714-44.26,3.949-50.578,8.993-50.578,8.993L473,2597.257l39.209-14.394-81.694,6.269,71.381-28.512s-60.057,1.416-60.057,2.022,51.16-21.839,51.16-21.839l-40.038,2.427,32.556-20.221-23.254,1.213,15.975-9.908-9.706,1.416,7.684-4.853"
              transform="translate(-422.422 -2489.784)"
              fill="none"
              stroke="#707070"
              stroke-width="2"
            />
            <path
              id="Trace-sapin-2"
              data-name="Tracé 3"
              d="M473,2489.784l-2.858,5.615-5.707.736,4.05,3.682-.828,5.615,5.343-2.3,5.61,3.221-1.289-6.535,4.05-3.682-5.706-1.2Z"
              transform="translate(-422.422 -2489.784)"
              fill="none"
              stroke="#707070"
              stroke-width="2"
            />
            <path
              id="Trace-sapin-3"
              data-name="Tracé 4"
              d="M417.441,2635.009s21.356,3.51,37-1.841S484,2616.826,484,2616.826"
              transform="translate(-400.241 -2482.025)"
              fill="none"
              stroke="#707070"
              stroke-width="5"
            />
          </g>
        </svg>
      </div>
    </InView>
  );
};

export default SappinAnnimer;
