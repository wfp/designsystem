import React, { Component } from 'react'
import classnames from 'classnames'

import Pagination from '../Pagination'


const defaultButton = props => (
  <button type="button" {...props} className="-btn">
    {props.children}
  </button>
)

export default class ReactTablePagination extends Component {
  constructor (props) {
    super()

    this.getSafePage = this.getSafePage.bind(this)
    this.changePage = this.changePage.bind(this)
    this.applyPage = this.applyPage.bind(this)

    this.state = {
      page: props.page,
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ page: nextProps.page })
  }

  getSafePage (page) {
    if (isNaN(page)) {
      page = this.props.page
    }
    return Math.min(Math.max(page, 0), this.props.pages - 1)
  }

  changePage (page) {
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

  applyPage (e) {
    if (e) { e.preventDefault() }
    const page = this.state.page
    this.changePage(page === '' ? this.props.page : page)
  }


  handlePageClick = (data) => {
    this.setState({ page: data.selected })
    this.changePage(data.selected);
  }


  render () {
    const {
      // Computed
      data,
      pages,
      // Props
      page,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize,
      showPageJump,
      canPrevious,
      canNext,
      onPageSizeChange,
      className,
      PreviousComponent = defaultButton,
      NextComponent = defaultButton,
    } = this.props;


    console.log(this.props);


    const props = {
      onChange: ({ page, pageSize }) => {
        console.log(`Page: ${page}`, `Page Size: ${pageSize}`); // eslint-disable-line no-console
      },
      pageSizes: [10, 20, 30, 40, 50],
    };

    return (
      <div
        className={classnames(className, '-pagination')}
        style={this.props.style}
      >
        <div className="wfp-pagination">
          <Pagination
          {...props}
          onChange={this.changePage}
          pageSizes={pageSizeOptions}
          totalItems={data.length} />
         {/*<ReactPaginate
            activeClassName={"active"}
            disabledClassName={"disabled"} //TODO: Create this class
            breakClassName={"pagination--item"}
            breakLabel={
              <a
                className="pagination--btn ellipsis"
                href=""
              >&hellip;
              </a>
            }

            containerClassName={"pagination--wrapper"}
            // hrefBuilder={this.hrefBuilder}
            marginPagesDisplayed={2}
            nextClassName={"pagination--item"}
            nextLabel={"next"}
            nextLinkClassName={"pagination--btn"}
            onPageChange={this.handlePageClick}
            pageClassName={"pagination--item"}
            pageCount={this.props.pages}
            pageLinkClassName={"pagination--btn"}
            pageRangeDisplayed={2}
            previousClassName={"pagination--item"}
            previousLabel={"previous"}
            previousLinkClassName={"pagination--btn"}
            subContainerClassName={"pagination--item"}
          />*/}
        </div>
      </div>
    )
  }
}