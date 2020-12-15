import React from 'react';
import {Table, Tooltip, Icon} from '@wfp/ui';
import {iconOverflowMenu} from '@wfp/icons';

function ToolTipTest() {
    return (
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
                        placement={"bottom"}
                        useWrapper 
                        content="Label Text" 
                        >
                        <span>
                            <Icon
                            description="options"
                            icon={iconOverflowMenu}
                            width="17px"
                            height="17px"
                            />
                        </span>
                        
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
                    useWrapper
                    >
                    <span className="hello">
                        Click
                    </span>
                    </Tooltip>
                    
                  </td>
              </tr>
        </tbody>
      </Table>
    )
}

export default ToolTipTest
