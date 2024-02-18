import classes from "./Logo.module.css";

export default function NextPageLogo() {
  return (
    <>
      {" "}
      <svg
        width="70px"
        height="70px"
        viewBox="-174.08 -174.08 860.16 860.16"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <defs></defs>{" "}
          <g data-name="Layer 2" id="Layer_2">
            {" "}
            <g
              data-name="E415, next, Media, media player, multimedia"
              id="E415_next_Media_media_player_multimedia"
            >
              {" "}
              <circle
                className={classes.next}
                cx="256"
                cy="256"
                r="246"
              ></circle>{" "}
              <polyline
                className={classes.next}
                points="178.18 411.63 333.82 256 178.18 100.37"
              ></polyline>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
     
    </>
  );
}
