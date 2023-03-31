import React from "react";
import {UserOutlined} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import {useSelector} from "react-redux";

const UserAvatar = ({size}) => {
  const auth = useSelector((state) => state.auth);

  if (auth?.avatar && auth.avatar !== "") {
    return (
      <Avatar
        size={size}
        src={auth.avatar}
      />
    );
  }
  return <Avatar size={size} icon={<UserOutlined/>}/>;
};

export default UserAvatar;
