import React from "react";

function Features(props) {
  return (
    <div className="feature">
      <p id="fp">
        This React-built app allows the user to Search for any city in the world
        and see a five day forecast. In the future I plan to implement the
        option to search for up to 16 days in the future, which is the max that
        the api allows. other future implementations with be a dropdown for
        units of measurement, and a dark mode.
      </p>
    </div>
  );
}

export default Features;
