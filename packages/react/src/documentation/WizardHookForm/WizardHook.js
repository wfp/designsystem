import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormWizard from '../../components/FormWizard';
import FormControls from '../../components/FormControls';
import StepNavigation from '../../components/StepNavigation';
import StepNavigationItem from '../../components/StepNavigationItem';
import useWizard from '../../hooks/useWizard';

// accept props: pagenumber, content, label

const WizardHook = ({ content }) => {
  const form = useForm();
  const { handleSubmit, register, errors } = form;
  // const [page, setPage] = useState(0);
  const [allFormData, setFormData] = useState();

  const submitCallback = (data) => {
    console.log('submitCallback', data);
  };

  const {
    page,
    currentContent,
    previous,
    handleTabClick,
    handleFormSubmit,
    isLastPage,
  } = useWizard({
    content,
    contentProp: { register },
    currentData: allFormData,
    submitCallback,
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormWizard
        formHeader={`Step ${page + 1}/${content.length}`}
        stickySidebar
        formControls={
          <FormControls
            onPreviousClick={previous}
            previousHidden={page > 0 ? false : true}
            nextHidden={isLastPage}
            submitHidden={!isLastPage}
            onSubmitClick={handleFormSubmit}
          />
        }
        sidebar={
          <StepNavigation
            selectedPage={page}
            onSelectionChange={handleTabClick}
            handleTabClick={handleTabClick}>
            {content.map((element, i) => (
              <StepNavigationItem label={element.label} page={i} />
            ))}
          </StepNavigation>
        }>
        {currentContent}
      </FormWizard>
      <pre>{JSON.stringify(allFormData, 0, 2)}</pre>
    </form>
  );
};

export default WizardHook;
