import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Next(props) {
  return (
    <Svg
      width={27}
      height={30}
      viewBox="0 0 27 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.5 3.167L23.333 23 3.5 42.833"
        stroke="#2C322D"
        strokeWidth={5.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Next;
