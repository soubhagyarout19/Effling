import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeftEllipse(props) {
  return (
    <Svg
      width={111}
      height={460}
      viewBox="0 0 111 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.593 4.42C59.73-19.995 106.01 79.597 110.297 185.687c4.287 106.09-32.344 245.264-83.482 269.678-51.138 24.413-96.672-56.744-101.704-181.269C-79.92 149.571-42.545 28.833 8.593 4.419z"
        fill="#FDF2F0"
      />
    </Svg>
  )
}

export default LeftEllipse;
