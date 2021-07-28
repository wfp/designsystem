import results from '../../jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default withTests({
  results,
  filesExt: '-test.js',
});
