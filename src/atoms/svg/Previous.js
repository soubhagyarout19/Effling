import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Previous(props) {
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
        d="M23.5 42.833L3.667 23 23.5 3.167"
        stroke="#79747E"
        strokeWidth={5.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Previous;
