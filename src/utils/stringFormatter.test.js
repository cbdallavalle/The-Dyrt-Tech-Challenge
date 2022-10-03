import {capitalizeEveryWord} from './stringFormatter';

test('all words are capitalized', () => {
  expect(capitalizeEveryWord('drive-in')).toEqual('Drive In');
});