import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ title, children }) => {
  return (
    <section className="Page">
      <h2 className="PageTitle">{title}</h2>
      <div className="PageContent">{children}</div>
    </section>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Page.defaultProps = {};

export default Page;
