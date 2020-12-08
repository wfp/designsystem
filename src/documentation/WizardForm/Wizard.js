import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormSpy } from 'react-final-form';
import FormWizard from '../../components/FormWizard';
import FormControls from '../../components/FormControls';
import StepNavigation from '../../components/StepNavigation';
import StepNavigationItem from '../../components/StepNavigationItem';

const handleValidation = props => {
  return null;
};

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }

  handleTabClick = values =>
    this.setState(state => ({
      page: values,
      values,
    }));

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
    }));

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];

    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}>
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            <FormWizard
              stickySidebar
              formHeader={`Step: ${page}/4 ${activePage.props.label}`}
              formControls={
                <FormControls
                  onPreviousClick={this.previous}
                  previousHidden={page > 0 ? false : true}
                  nextHidden={isLastPage}
                  submitHidden={!isLastPage}
                  onSubmitClick={handleSubmit}
                />
              }
              sidebar={
                <StepNavigation
                  selectedPage={page}
                  handleTabClick={this.handleTabClick}>
                  {/* You may also generate these steps from the pages */}

                  {React.Children.map(children, (child, i) => {
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
            <br />
            <br />
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    );
  }
}
