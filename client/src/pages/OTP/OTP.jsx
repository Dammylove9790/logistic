import React from "react";
import Background from "../../component/Background/Background";
import OTPuser from "../../component/OTPuser/OTPuser";
import Overlay from "../../component/Overlay/Overlay";
import SuccessOTP from "../../component/SuccessOTP/SuccessOTP";

function OTP(props) {
  return (
    <div className="otp__con">
      <Background />
      <OTPuser handler={props.handler} />
      {false && <Overlay />}
      {false && <SuccessOTP />}
    </div>
  );
}

export default OTP;
