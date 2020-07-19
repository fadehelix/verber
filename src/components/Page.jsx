import React from 'react';

const Page = ({title, children}) => {

  return(
    <section className="Page">
      <h2 className="PageTitle">{title}</h2>
      <div className="PageContent">
        {children}
      </div>
    </section>
  )
}

export default Page;