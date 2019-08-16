/* eslint-disable no-console */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Form, Field } from 'react-final-form';

import ReactTable from 'react-table';
import Fuse from 'fuse.js';

import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import TextInput from '../../components/TextInput';

import RegularPage from '../RegularPage';
import Wrapper from '../../components/Wrapper';
import Search from '../../components/Search';
import Select from '../../components/Select';
import SelectItem from '../../components/SelectItem';
import Button from '../../components/Button';

import { iconFilterAlt, iconSubtractGlyph } from '@wfp/icons';

import { Module, ModuleHeader, ModuleBody } from '../../components/Module';

import TablePagination from '../../components/TablePagination';

const data = [
  {
    name: 'Emyr Monaghan',
    age: 26,
    city: 'Berlin',
  },
  {
    name: 'Madihah Watson',
    age: 28,
    city: 'Rome',
  },
  {
    name: 'Rahim Valdez',
    age: 61,
    city: 'Nairobi',
  },
  {
    name: 'Max Mustermann',
    age: 73,
    city: 'Panama Citry',
  },
  {
    name: 'Maggie Alexander',
    age: 52,
    city: 'Bangok',
  },
  {
    name: 'Kirsten Martinez',
    age: 19,
    city: 'New York',
  },
  {
    name: 'Garfield Dejesus',
    age: 78,
    city: 'Paris',
  },
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name', // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
  },
  {
    Header: 'City',
    accessor: 'city', // String-based value accessors!
  },
];

const Table = ({ simpleSearch, search }) => {
  var dataFiltered = data;

  if (simpleSearch) {
    /* Simple Search using fuzy.js */
    var options = {
      shouldSort: true,
      distance: 0,
      threshold: 0.0,
      minMatchCharLength: 1,
      keys: ['name', 'age', 'city'],
    };
    var fuse = new Fuse(dataFiltered, options);
    dataFiltered = fuse.search(simpleSearch);
  }

  /* Advanced search with custom filtering for each input using fuzy.js */

  if (search.name) {
    var optionsName = {
      threshold: 0.0,
      minMatchCharLength: 1,
      keys: ['name'],
    };
    var fuseName = new Fuse(dataFiltered, optionsName);
    dataFiltered = fuseName.search(search.name);
  }

  if (search.age) {
    var optionsAge = {
      threshold: 0.0,
      minMatchCharLength: 1,
      keys: ['age'],
    };
    var fuseAge = new Fuse(dataFiltered, optionsAge);
    console.log('fuse', fuseAge);
    dataFiltered = fuseAge.search(search.age);
  }

  return (
    <ReactTable
      data={dataFiltered}
      defaultPageSize={10}
      columns={columns}
      className="-border -striped -highlight -spacing-xs"
      PaginationComponent={TablePagination}
    />
  );
};

const MyForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={{ stooge: 'larry', employed: false }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div className="wfp--form-long row">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <Field
              id="select"
              name="select"
              component={ReduxFormWrapper}
              inputComponent={Select}
              labelText="This is a select input">
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
            </Field>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <Field
              id="select"
              name="select"
              component={ReduxFormWrapper}
              inputComponent={Select}
              labelText="Another amazing select">
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
            </Field>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <Field
              id="name"
              name="name"
              component={ReduxFormWrapper}
              inputComponent={TextInput}
              labelText="Name"
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <Field
              id="age"
              name="age"
              component={ReduxFormWrapper}
              inputComponent={TextInput}
              labelText="Age"
            />
          </div>
        </div>
        <div
          className="buttons"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '1em',
          }}>
          <Button
            type="button"
            kind="ghost"
            onClick={form.reset}
            disabled={submitting || pristine}
            style={{ marginRight: '0.5em' }}>
            Clear filters
          </Button>
          <Button type="submit">Apply</Button>
        </div>
        {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
      </form>
    )}
  />
);

class TableWithFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterActivated: false,
      simpleSearch: undefined,
      search: {},
    };
  }

  toggleFilter = () => {
    if (this.state.filterActivated) {
      this.setState({ search: {} });
    }
    this.setState({ filterActivated: !this.state.filterActivated });
  };

  setSimpleSearch = event => {
    this.setState({ simpleSearch: event.target.value });
  };

  setSearch = event => {
    console.log('search', event);
    this.setState({ search: event });
  };

  render() {
    const { filterActivated } = this.state;

    return (
      <Module noMargin>
        <ModuleHeader
          filter={
            <React.Fragment>
              {' '}
              <Search
                placeHolderText="Type to filter"
                onChange={this.setSimpleSearch}
              />
              <Button
                onClick={this.toggleFilter}
                icon={filterActivated ? iconSubtractGlyph : iconFilterAlt}
                kind="secondary"
                style={{ marginLeft: '1em' }}>
                {filterActivated ? 'Hide filters' : 'Advanced filters'}
              </Button>
            </React.Fragment>
          }>
          Large table with filter
        </ModuleHeader>
        {filterActivated && (
          <ModuleBody>
            <MyForm onSubmit={this.setSearch} />
          </ModuleBody>
        )}
        <Table {...this.state} />
      </Module>
    );
  }
}

storiesOf('Documentation|Samples', module)
  //.addParameters({ options: { showPanel: false, isToolshown: false } })
  .addDecorator(story => (
    <RegularPage title="Table with filter">{story()}</RegularPage>
  ))
  .add('Table with filter', () => (
    <Wrapper background="lighter" pageWidth="lg" spacing="md">
      <TableWithFilter />
    </Wrapper>
  ));
