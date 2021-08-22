/* eslint-disable react/no-danger */
import React from "react";

interface Props {
  headComponents: React.ReactNode[];
  body: string;
  postBodyComponents: React.ReactNode[];
}

const HTML: React.FC<Props> = ({ headComponents, body, postBodyComponents }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {headComponents}
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
