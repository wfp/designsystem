/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

export default class CheckboxSkeleton extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div className="wfp--form-item wfp--checkbox-wrapper">
        {<label className="wfp--checkbox-label wfp--skeleton" htmlFor={id} />}
      </div>
    );
  }
}
