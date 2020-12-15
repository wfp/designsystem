import React, { useState } from 'react';
import { Form, FormSpy } from 'react-final-form';
import FormWizard from '../../components/FormWizard';
import FormControls from '../../components/FormControls';
import StepNavigation from '../../components/StepNavigation';
import StepNavigationItem from '../../components/StepNavigationItem';

const handleValidation = (props) => {
  return null;
};

const Page = ({children}) =>{
  return children;
}


const Wizard =({children, initialValues, onSubmit, ...other })=>{
  
  
  const [page, setPage] = useState(0);
  const [values, setValues] = useState(initialValues || {})

  const handleTabClick = (values) =>{
    setPage(values);
    setValues(values);
  }

  
  const next = (values) =>{
    setPage(Math.min(page + 1, children.length - 1));
    setValues(values);
  }

  const previous = () => {
    setPage(Math.max(page - 1, 0));
  }


  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  const validate = (values) => {
    const activePage = React.Children.toArray(children)[page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  const handleFormSubmit = values => {
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      next(values);
    }
  };


    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={validate}
        onSubmit={handleFormSubmit}>
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            <FormWizard
              stickySidebar
              formHeader={`Step ${page}/4: ${activePage.props.label}`}
              formControls={
                <FormControls
                  onPreviousClick={previous}
                  previousHidden={page > 0 ? false : true}
                  nextHidden={isLastPage}
                  submitHidden={!isLastPage}
                  onSubmitClick={handleSubmit}
                />
              }
              sidebar={
                <StepNavigation
                  selectedPage={page}
                  handleTabClick={handleTabClick}>
                  {/* You may also generate these steps from the pages */}

                  {React.Children.map(children, (child, i) => 
                  {
                    // Ignore the first child
                    return (
                      <StepNavigationItem
                        page={i}
                        status={page >= i ? 'complete' : 'not-started'}
                        {...child.props}
                      />
                    );
                  })}

                  {/*<StepNavigationItem
                    label="Name and last name"
                    page={0}
                    status={page >= 1 ? 'complete' : 'not-started'}
                  />
                  <StepNavigationItem
                    label="Additional information"
                    page={1}
                    status={page >= 2 ? 'complete' : 'not-started'}
                  />
                  <StepNavigationItem
                    label="Sulamen mon anmen"
                    page={2}
                    status={page >= 1 ? 'complete' : 'locked'}
                  />
                  <StepNavigationItem
                    label="Summary"
                    helperText="Check & validate"
                    page={3}
                    status={'summary'}
                  />*/}
                </StepNavigation>
              }>
              {/* Adding the wfp--form-long class is important */}
              <div className="wfp--form-long">{activePage}</div>
            </FormWizard>

            <FormSpy
              subscription={{ active: true, values: true }}
              component={handleValidation}
            />
            {/* <br />
            <br />
            <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      </Form>
    );
  
}

export {
  Wizard,
  Page
}


// static propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

