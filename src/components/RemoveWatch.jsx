import React from "react";

//   <span className="m-2">
//     Remove
//     <br />
//     favourite
//   </span>
const RemoveWatch = () => {
  return (
    <>
      <div class="tooltip">
        <span class="tooltiptext">remove watchlist</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="gold"
        className="bi bi-bookmark-fill"
        viewBox="0 0 16 16"
      >
        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      </svg>
    </>
  );
};
export default RemoveWatch;

// <>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     fillRule="currentColor"
//     className="bi bi-x-lg"
//     viewBox="0 0 16 16"
//   >
//     <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
//   </svg>
// </>
