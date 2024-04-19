import React from 'react';

type PageTitleProps = {
  children: React.ReactNode;
};

function PageTitle({ children }: PageTitleProps) {
  return <h2>{children}</h2>;
}

export default PageTitle;
