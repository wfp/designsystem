import React, { Component } from 'react'
import classnames from 'classnames'

import Pagination from '../Pagination'

export default class ReactTablePagination extends Component {
  constructor (props) {
    super()

    this.state = {
      page: props.page,
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ page: nextProps.page })
  }

  getSafePage = (page) => {
    if (isNaN(page)) {
      page = this.props.page
    }
    return Math.min(Math.max(page, 0), this.props.pages - 1)
  }

  changePage = (page) => {
    const nextPage = this.getSafePage(page.page-1)
    this.setState({ page });
    
    // Change Page
    if (this.props.page !== nextPage) {
      this.props.onPageChange(nextPage)
    }

    // Change PageSize
    if (this.props.pageSize !== page.pageSize) {
      this.props.onPageSizeChange(page.pageSize)
    }
  }

  render () {
    const {
      // Computed
      data,
      isLastPage,
      pages,
      // Props
      page,
      showPageSizeOptions,
      pageInputDisabled,
      pageSizeOptions,
      pageSize,
      pagesUnknown,
      paginationClassName,
      showPageJump,
      totalItems,
    } = this.props;

    return (
      <div
        className={classnames(paginationClassName, '-pagination')}
        style={this.props.style}
      >
        <div className="wfp-pagination">
          <Pagination
            onChange={this.changePage}
            pageSizes={pageSizeOptions}
            totalItems={totalItems ? totalItems : data.length}
            pagesUnknown={pagesUnknown}
            isLastPage={isLastPage}
            pageInputDisabled={pageInputDisabled}
          />
        </div>
      </div>
    )
  }
}