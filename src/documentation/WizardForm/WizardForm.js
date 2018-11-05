import React, { Component } from 'react'
import PropTypes from 'prop-types'

import StepNavigation from '../../components/StepNavigation';
import StepNavigationSection from '../../components/StepNavigation';
import StepNavigationItem from '../../components/StepNavigationItem';
import Wrapper from '../../components/Wrapper';
import FormWizard from '../../components/FormWizard'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <Wrapper pageWidth="md">
        <FormWizard
          sidebar={
            <StepNavigation>
            <StepNavigationSection label="Tab label 1">
              <StepNavigationItem label="Tab label 1">
                <div className="some-content">Content for first tab goes here.</div>
              </StepNavigationItem>
              <StepNavigationItem label="Tab label 2">
                <div className="some-content">Content for second tab goes here.</div>
              </StepNavigationItem>
            </StepNavigationSection>
            <StepNavigationSection label="Tab label 1">
              <StepNavigationItem label="Tab label 3">
                <div className="some-content">Content for third tab goes here.</div>
              </StepNavigationItem>
            </StepNavigationSection>
            </StepNavigation>
          }
        >
          {page === 1 && (
            <WizardFormFirstPage
              onSubmit={this.nextPage}
            />
          )}
          {page === 2 && (
            <WizardFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
            />
          )}
        </FormWizard>
      </Wrapper>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm