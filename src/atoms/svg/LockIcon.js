import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LockIcon(props) {
  return (
    <Svg
      width={23}
      height={26}
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.235 11.412V8.235a7.941 7.941 0 1115.883 0v3.177a3.176 3.176 0 013.176 3.176v7.941a3.176 3.176 0 01-3.176 3.177H3.235A3.177 3.177 0 01.06 22.529v-7.94a3.177 3.177 0 013.176-3.177zm12.706-3.177v3.177h-9.53V8.235a4.765 4.765 0 119.53 0z"
        fill="#AA4724"
      />
    </Svg>
  )
}

export default LockIcon;
