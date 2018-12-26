import React from 'react';

export default class ToggleSkeleton extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div className="wfp--form-item">
        <input type="checkbox" id={id} className="wfp--toggle wfp--skeleton" />

        <label className="wfp--toggle__label wfp--skeleton" htmlFor={id}>
          <span className="wfp--toggle__text--left" />
          <span className="wfp--toggle__appearance" />
          <span className="wfp--toggle__text--right" />
        </label>
      </div>
    );
  }
}
