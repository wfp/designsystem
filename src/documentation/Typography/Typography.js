import React from 'react';
import Text from '../../components/Text';
import Table from '../../components/Table';
import Story from '../../components/Story';

const Typography = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Text</th>
            <th>Story</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Headers</td>
            <td>
              <Text kind="h1">Heading 1</Text>
              <Text kind="p">29px, SemiBold</Text>
            </td>
            <td>
              <Story>
                <Text kind="title">Heading 1</Text>
                <p>54px, SemiBold</p>
              </Story>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="h2">Heading 2</Text>
              <Text kind="p">25px, SemiBold</Text>
            </td>
            <td>
              <Story>
                <h2>Heading 2</h2>
                <p>28px, SemiBold</p>
              </Story>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="h3">Heading 3</Text>
              <Text kind="p">22px, SemiBold</Text>
            </td>
            <td>
              <Story>
                <h3>Heading 3</h3>
                <p>20px, SemiBold</p>
              </Story>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="h4">Heading 4</Text>
              <Text kind="p">20px, SemiBold</Text>
            </td>
            <td>
              <Story>
                <h4>Heading 4</h4>
                <p>16px, SemiBold</p>
              </Story>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="h5">Heading 5</Text>
              <Text kind="p">18px, SemiBold</Text>
            </td>
            <td>
              <Story>
                <h5>Heading 5</h5>
                <p>16px, SemiBold</p>
              </Story>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="h6">Heading 6</Text>
              <Text kind="p">16px, SemiBold</Text>
            </td>
            <td>
              <Story>
                <h6>Heading 6</h6>
                <p>14px, SemiBold</p>
              </Story>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="h6">Heading 6</Text>
              <Text kind="p">16px, SemiBold</Text>
            </td>
            <td>
              <Story>
                <h6>Heading 6</h6>
                <p>14px, SemiBold</p>
              </Story>
            </td>
          </tr>
          <tr>
            <td>Text</td>
            <td>
              <Text kind="p">Body copy, paragraph</Text>
              <Text kind="p">16px, Regular</Text>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="p">Label (Form)</Text>
              <Text kind="p">16px, Regular</Text>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="code">Code</Text>
              <Text kind="p">Monospace, 13px, Regular</Text>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="sup">Sup</Text>
              <Text kind="p">11px, Regular</Text>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="subtitle">overline</Text>
              <Text kind="p">14px, SemiBold</Text>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Text kind="p">Inline highlight</Text>
              <Text kind="p">14px, SemiBold</Text>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Typography;
