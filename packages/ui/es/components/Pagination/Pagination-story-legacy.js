import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, number, text } from '@storybook/addon-knobs';
import Pagination from '../Pagination';

var props = function props() {
  return {
    disabled: boolean('Disable backward/forward buttons (disabled)', false),
    page: number('The current page (page)', 1),
    totalItems: number('Total number of items (totalItems)', 103),
    pagesUnknown: boolean('Total number of items unknown (pagesUnknown)', false),
    pageInputDisabled: boolean('Disable page input (pageInputDisabled)', false),
    isLastPage: boolean('At the last page (isLastPage)', false),
    backwardText: text('The description for the backward icon (backwardText)', 'Backward'),
    forwardText: text('The description for the backward icon (forwardText)', 'Forward'),
    pageSize: number('Number of items per page (pageSize)', 10),
    pageSizes: array('Choices of `pageSize` (pageSizes)', [10, 20, 30, 40, 50]),
    pageSizesDisabled: boolean('Hide the `pageSize` select (pageSizeDisabled)', false),
    itemsPerPageText: text('Label for `pageSizes` select UI (itemsPerPageText)', 'Items per page:'),
    onChange: action('onChange')
  };
};

storiesOf('Components|Pagination', module).addDecorator(withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '800px'
    }
  }, story());
}).add('default', function () {
  return /*#__PURE__*/React.createElement(Pagination, props());
}).add('multipe pagination components', function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Pagination, props()), /*#__PURE__*/React.createElement(Pagination, props()));
});