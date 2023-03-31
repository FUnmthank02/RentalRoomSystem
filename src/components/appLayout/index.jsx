import React from "react";
import { Layout } from "antd";
import FooterComponent from "./footer";
import HeaderComponent from "./header";

const { Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Header className="text-center">
            <HeaderComponent />
          </Header>
          <Content>{children}</Content>
          <Footer className="text-center">
            <FooterComponent />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
