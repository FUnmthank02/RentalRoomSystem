import React from "react";
import { notification } from "antd";

const Notification = ({ type, message }) => {
  notification[type]({
    message: message,
  });
  return <></>;
};
export default Notification;
