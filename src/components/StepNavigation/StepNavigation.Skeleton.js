import React from 'react';

export default class TabsSkeleton extends React.Component {
  render() {
    const tab = (
      <li className="wfp--tabs__nav-item">
        <div className="wfp--tabs__nav-link">&nbsp;</div>
      </li>
    );
    return (
      <nav className="wfp--tabs wfp--skeleton">
        <div className="wfp--tabs-trigger">
          <div className="wfp--tabs-trigger-text">&nbsp;</div>
          <svg width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
            <path d="M10 0L5 5 0 0z" />
          </svg>
        </div>
        <ul className="wfp--tabs__nav wfp--tabs__nav--hidden">
          <li className="wfp--tabs__nav-item wfp--tabs__nav-item--selected">
            <div className="wfp--tabs__nav-link"> &nbsp;</div>
          </li>
          {tab}
          {tab}
          {tab}
        </ul>
      </nav>
    );
  }
}
