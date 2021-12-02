import React, { useRef, useEffect } from 'react';
import { Table, Tooltip, Icon, Search } from '@unitednations/react';
import { OverflowMenu16 } from '@unitednations/icons-react';

function ToolTipTest() {
  const searchRef = useRef(null);

  useEffect(() => {
    // Logs `HTMLInputElement`
    console.log(searchRef.current);

    searchRef.current.focus();
  }, []);

  const onChangeSearch = () => {
    console.log('serachRef', searchRef.current);
  };

  return (
    <>
      <Search inputRef={searchRef} onChange={onChangeSearch} />

      <Table withBorder="true">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Target</th>
            <th>Cost per meal</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cassie</td>
            <td>22</td>
            <td>6-12 - M/F</td>
            <td>$2.5</td>
            <td>
              <Tooltip
                trigger="click"
                placement={'bottom'}
                useWrapper={false}
                content="Label Text">
                <Icon
                  description="options"
                  icon={OverflowMenu16}
                  width="17px"
                  height="17px"
                />
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td>Kess</td>
            <td>23</td>
            <td>12-16 - M/F</td>
            <td>$2.59</td>
            <td>
              <Tooltip
                content="Label text"
                placement="bottom"
                trigger="click"
                useWrapper>
                <span className="hello">Click</span>
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ToolTipTest;
