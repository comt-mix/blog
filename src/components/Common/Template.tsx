import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import GlobalStyle from "components/Common/GlobalStyle";
import Footer from "components/Common/Footer";
import { Helmet } from "react-helmet";

type TemplateProps = {
  title: string;
  url: string;
  image: string;
  children: ReactNode;
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="comt" />
        <meta name="twitter:creator" content="comt" />

        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;
