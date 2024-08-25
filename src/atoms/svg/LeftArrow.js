import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeftArrow(props) {
  return (
    <Svg
      width={props.height}
      height={props.width}
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.714.607L.097 15.187l18.617 14.58v-7.851h8.524V8.234h-8.524V.607z"
        fill="#EDFFF6"
      />
    </Svg>
  )
}

export default LeftArrow;
