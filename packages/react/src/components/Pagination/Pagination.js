import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { ChevronLeft, ChevronRight } from '@un/icons-react';
import Select from '../Select';
import SelectItem from '../SelectItem';
import { equals } from '../../tools/array';

let instanceId = 0;

/** Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page. */

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    const { pageSizes, page, pageSize } = this.props;
    this.state = {
      page: page,
      pageSize: pageSizes.includes(pageSize) ? pageSize : pageSizes[0],
      prevPageSizes: pageSizes,
      prevPage: page,
      prevPageSize: pageSize,
    };
    this.uniqueId = ++instanceId;
  }

  static propTypes = {
    /**
     * The description for the backward icon.
     */
    backwardText: PropTypes.string,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * The function returning a translatable text showing where the current page is,
     * in a manner of the range of items.
     */
    itemRangeText: PropTypes.func,

    /**
     * The description for the forward icon.
     */
    forwardText: PropTypes.string,

    /**
     * The unique ID of this component instance.
     */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The translatable text indicating the number of items per page.
     */
    itemsPerPageText: PropTypes.string,

    /**
     * A variant of `itemsPerPageText`, with a sign indicating that the number follows, e.g. ':'.
     */
    itemsPerPageFollowsText: PropTypes.string,

    /**
     * A variant of `itemRangeText`, used if the total number of items is unknown.
     */
    itemText: PropTypes.func,

    /**
     * The callback function called when the current page changes.
     */
    onChange: PropTypes.func,

    pageNumberText: PropTypes.string,

    /**
     * A function returning PII showing where the current page is.
     */
    pageRangeText: PropTypes.func,

    /**
     * The translatable text showing the current page.
     */
    pageText: PropTypes.func,

    /**
     * The choices for `pageSize`.
     */
    pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,

    /**
     * `true` if ture the pageSizes should be not visible.
     */
    pageSizesDisabled: PropTypes.bool,

    /**
     * The total number of items.
     */
    totalItems: PropTypes.number,

    /**
     * `true` if the backward/forward buttons should be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The current page.
     */
    page: PropTypes.number,

    /**
     * The number dictating how many items a page contains.
     */
    pageSize: PropTypes.number,

    /**
     * `true` if the total number of items is unknown.
     */
    pagesUnknown: PropTypes.bool,

    /**
     * `true` if the current page should be the last page.
     */
    isLastPage: PropTypes.bool,

    /**
     * `true` if the select box to change the page should be disabled.
     */
    pageInputDisabled: PropTypes.bool,
  };

  static defaultProps = {
    backwardText: 'Backward',
    itemRangeText: (min, max, total) => `${min}-${max} of ${total} items`,
    forwardText: 'Forward',
    itemsPerPageText: 'Items per page:',
    pageNumberText: 'Page Number',
    pageRangeText: (current, total) => `${current} of ${total} pages`,
    disabled: false,
    page: 1,
    pagesUnknown: false,
    pageSizes: [10, 20, 50],
    isLastPage: false,
    pageInputDisabled: false,
    itemText: (min, max) => `${min}-${max} items`,
    pageText: (page) => `page ${page}`,
  };

  static getDerivedStateFromProps({ pageSizes, page, pageSize }, state) {
    const {
      prevPageSizes,
      prevPage,
      prevPageSize,
      page: currentPage,
      pageSize: currentPageSize,
    } = state;
    const pageSizesChanged = !equals(pageSizes, prevPageSizes);
    const pageChanged = page !== prevPage;
    const pageSizeChanged = pageSize !== prevPageSize;
    return !pageSizesChanged && !pageChanged && !pageSizeChanged
      ? null
      : {
          page: pageSizesChanged ? 1 : pageChanged ? page : currentPage,
          pageSize: pageSizesChanged
            ? pageSizes[0]
            : pageSizeChanged
            ? pageSize
            : currentPageSize,
          prevPageSizes: pageSizes,
          prevPage: page,
          prevPageSize: pageSize,
        };
  }

  handleSizeChange = (evt) => {
    const pageSize = Number(evt.target.value);
    this.setState({ pageSize, page: 1 }, () => {});
    this.props.onChange({ page: 1, pageSize });
  };

  handlePageChange = (evt) => {
    this.setState({ page: evt.target.value });
  };

  handlePageInputChange = (evt) => {
    const page = Number(evt.target.value);
    if (
      page > 0 &&
      page <=
        Math.max(Math.ceil(this.props.totalItems / this.state.pageSize), 1)
    ) {
      this.setState({ page });
      this.props.onChange({ page, pageSize: this.state.pageSize });
    }
  };

  incrementPage = () => {
    const page = this.state.page + 1;
    this.setState({ page });
    this.props.onChange({ page, pageSize: this.state.pageSize });
  };

  decrementPage = () => {
    const page = this.state.page - 1;
    this.setState({ page });
    this.props.onChange({ page, pageSize: this.state.pageSize });
  };

  renderSelectItems = (total) => {
    let counter = 1;
    let itemArr = [];
    while (counter <= total) {
      itemArr.push(
        <SelectItem key={counter} value={counter} text={String(counter)} />
      );
      counter++;
    }
    return itemArr;
  };

  render() {
    const {
      backwardText,
      className,
      forwardText,
      id,
      itemsPerPageText,
      itemsPerPageFollowsText,
      itemRangeText,
      pageRangeText,
      pageSize, // eslint-disable-line no-unused-vars
      pageSizesDisabled,
      pageSizes,
      itemText,
      pageText,
      pageNumberText, // eslint-disable-line no-unused-vars
      pagesUnknown,
      isLastPage,
      pageInputDisabled,
      totalItems,
      onChange, // eslint-disable-line no-unused-vars
      page: pageNumber, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const statePage = this.state.page;
    const statePageSize = this.props.pageSize
      ? this.props.pageSize
      : this.state.pageSize;
    const classNames = classNames('wfp--pagination', className);
    const backButtonClasses = classNames(
      'wfp--pagination__button',
      'wfp--pagination__button--backward',
      {
        'wfp--pagination__button--no-index': pageInputDisabled,
      }
    );
    const inputId = id || this.uniqueId;
    const totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
    const selectItems = this.renderSelectItems(totalPages);

    return (
      <div className={classNames} {...other}>
        <div className="wfp--pagination__left">
          {!pageSizesDisabled && (
            <React.Fragment>
              <span className="wfp--pagination__text">
                {itemsPerPageFollowsText || itemsPerPageText}
              </span>
              <Select
                id={`wfp-pagination-select-${inputId}`}
                labelText={itemsPerPageText}
                hideLabel
                inline
                onChange={this.handleSizeChange}
                // value={statePageSize}
                value={this.state.pageSize}>
                {pageSizes.map((size) => (
                  <SelectItem key={size} value={size} text={String(size)} />
                ))}
              </Select>
              <span className="wfp--pagination__text">&nbsp;|&nbsp;&nbsp;</span>
            </React.Fragment>
          )}
          <span className="wfp--pagination__text">
            {pagesUnknown
              ? itemText(
                  statePageSize * (statePage - 1) + 1,
                  statePage * statePageSize
                )
              : itemRangeText(
                  Math.min(
                    this.state.pageSize * (statePage - 1) + 1,
                    totalItems
                  ),
                  Math.min(statePage * this.state.pageSize, totalItems),
                  totalItems
                )}
          </span>
        </div>
        <div className="wfp--pagination__right wfp--pagination--inline">
          <span className="wfp--pagination__text">
            {pagesUnknown
              ? pageText(statePage)
              : pageRangeText(statePage, totalPages)}
          </span>
          <button
            className={backButtonClasses}
            onClick={this.decrementPage}
            disabled={this.props.disabled || statePage === 1}>
            <ChevronLeft
              className="wfp--pagination__button-icon"
              description={backwardText}
            />
          </button>
          {pageInputDisabled ? null : (
            <Select
              id={`wfp-pagination-select-${inputId + 2}`}
              labelText={itemsPerPageText}
              hideLabel
              inline
              onChange={this.handlePageInputChange}
              value={statePage}>
              {selectItems}
            </Select>
          )}
          <button
            className="wfp--pagination__button wfp--pagination__button--forward"
            onClick={this.incrementPage}
            disabled={
              this.props.disabled || statePage === totalPages || isLastPage
            }>
            <ChevronRight
              className="wfp--pagination__button-icon"
              description={forwardText}
            />
          </button>
        </div>
      </div>
    );
  }
}
