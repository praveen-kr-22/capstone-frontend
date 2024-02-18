import classes from "./ShowDetailLogo.module.css";

export default function ShowDeatilLogo() {
  return (
    <svg
      fill="#000000"
      width="45px"
      height="45px"
      viewBox="-14.88 -14.88 45.76 45.76"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      stroke-width="0.384"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.032"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g fill="gray">
          {" "}
          <path d="M8 16a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8zm0-1a7 7 0 0 0 7-7 7 7 0 0 0-7-7 7 7 0 0 0-7 7 7 7 0 0 0 7 7z"></path>{" "}
          <path
            className={classes.main}
            d="M8 3.75c-.386 0-.69.124-.914.373A1.269 1.269 0 0 0 6.75 5c0 .336.112.628.336.877.224.249.528.373.914.373s.69-.124.914-.373c.224-.249.336-.541.336-.877 0-.336-.112-.628-.336-.877C8.69 3.874 8.386 3.75 8 3.75zM7 7v5h2V7z"
            font-family="Ubuntu"
            font-weight="400"
            letter-spacing="0"
            word-spacing="0"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
