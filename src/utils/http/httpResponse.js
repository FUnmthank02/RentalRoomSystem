import React from "react";
import { notification } from "antd";
import { http } from "./http";

const HttpResponse = () => {
  http.interceptors.response.use(
    (ress) => {
      return ress;
    },
    (error) => {
      if (error && error.config && error.response) {
        if (error.response.status !== 422) {
          notification["error"]({
            message:
              error.response?.data?.message ||
              error.response?.data?.error?.message ||
              "",
          });
        }
      } else {
        notification["error"]({
          message: "Network Error ",
          description:
            "Something is temporarily wrong with your network connection. Please make sure you are connected to the internet and then reload your browser",
        });
      }
      return Promise.reject(error);
    }
  );

  return <></>;
};

export default HttpResponse;
