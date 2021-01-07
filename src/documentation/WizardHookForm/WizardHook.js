import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormWizard from '../../components/FormWizard';
import FormControls from '../../components/FormControls';
import StepNavigation from '../../components/StepNavigation';
import StepNavigationItem from '../../components/StepNavigationItem';


// accept props: pagenumber, content, label

const WizardHook =({ content })=>{
    const form = useForm();
    const { handleSubmit, register, errors } = form;
    const [page, setPage] = useState(0);
    const [allFormData, setFormData] = useState()

    const handleTabClick = (value) =>{
       setPage(value)    
    }

    const next = () => {
        setPage(page + 1);
    }

    const handleFormSubmit = (data) => {
        const isLastPage = page === content.length - 1
        if (isLastPage) {
            setFormData(data);
          } else {
            next();
        }
        
    };

    const previous = () => {
        setPage(Math.max(page - 1, 0));
    }
    
    const isLastPage = page === content.length - 1

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
                  handleTabClick={handleTabClick}
                  >
                    {content.map((element, i)=>(
                    <StepNavigationItem label={element.label} page={i} />
                    )
                    )}
                </StepNavigation>
              }>
            {
                content.map((element, i)=>{
                    return (
                    <div className="wfp--form-long" style={{display:page===i?'block':'none'}}>
                        {React.cloneElement(element.content, {register})}
                    </div>
                    )
                })
            }
              
            </FormWizard>
            <pre>{JSON.stringify(allFormData, 0, 2)}</pre>
          </form>

    );
  
}

export default WizardHook;
