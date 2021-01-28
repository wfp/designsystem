import React,{useState} from 'react'

import Search from '../../components/Search';
import Button from '../../components/Button';

import { iconFilterAlt, iconSubtractGlyph } from '@wfp/icons';

import { Module, ModuleHeader, ModuleBody } from '../../components/Module';
import Table from './DataTable'
import MyForm from './Form';

function TableWithFilter() {
    const [simpleSearch, setSimpleSearch] = useState();
    const [filterActivated, setFilterActivated] = useState(false);
    const [search, setSearch] = useState({})

    const handleOnFormSubmit = (formdata) => {
      setSearch(formdata)
    }

    const handleSearchOnchange = (value) =>{
        setSimpleSearch(value)
    }

    const toggleFilter = () => {
        if (filterActivated) {
          setSearch({})
        }
        setFilterActivated(!filterActivated);
    };

    return (
        <Module noMargin>
        <ModuleHeader
          filter={
            <>
              <Search
                id="tablewithfilter"
                placeHolderText="Type to filter"
                value={simpleSearch}
                onChange={handleSearchOnchange}
              />
              <Button
                onClick={toggleFilter}
                icon={filterActivated ? iconSubtractGlyph : iconFilterAlt}
                kind="secondary"
                style={{ marginLeft: '1em' }}>
                {filterActivated ? 'Hide filters' : 'Advanced filters'}
              </Button>
            </>
          }>
          Large table with filter
        </ModuleHeader>
        {filterActivated && (
          <ModuleBody>
            <MyForm onFormChange={handleOnFormSubmit}/>
          </ModuleBody>
        )}
        <Table filterText={simpleSearch} advanceFilter={search} /> 
      </Module>
    )
}

export default TableWithFilter
