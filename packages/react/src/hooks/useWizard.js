import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useWizard = ({ content, contentProp, submitCallback }) => {
  const [page, setPage] = useState(0);

  const currentContent = content && (
    <div className="wfp--form-long">
      {React.cloneElement(content[page].content, contentProp || {})}
    </div>
  );

  const handleTabClick = (value) => {
    setPage(value);
  };

  const next = () => {
    setPage(page + 1);
  };

  // this is to handle content not provided
  const isLastPage = page === (content?.length || 0) - 1;

  const handleFormSubmit = (data) => {
    if (isLastPage) {
      submitCallback & submitCallback(data);
    } else {
      next();
    }
  };

  const previous = () => {
    setPage(Math.max(page - 1, 0));
  };

  return {
    page,
    currentContent,
    previous,
    handleTabClick,
    handleFormSubmit,
    isLastPage,
  };
};

useWizard.propTypes = {
  /**
     * Content should be an array of wizard content e.g 
     * content={[
     * {
        label: "Name and last name",
        content: <StepOne />
      },
      {
        label: "Contact data",
        content: <StepTwo />
      },
    ]}
    */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node,
    })
  ),

  /**
   * Custom props for each content
   */
  contentProp: PropTypes.object,

  /**
   * Callback function after submit
   */
  submitCallback: PropTypes.func,
};

export default useWizard;
