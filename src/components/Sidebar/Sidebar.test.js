import {render, screen, fireEvent, waitFor, act} from '@testing-library/react';
import Sidebar from '.';
import searchResuls from '../../data/searchResults';

let setSelectedCampgroundId;

beforeEach(() => {
  setSelectedCampgroundId = jest.fn();

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue([searchResuls[0]])
  });
  
  jest.useFakeTimers();
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

test('loads and displays empty state', async () => {
  render(<Sidebar setSelectedCampgroundId={setSelectedCampgroundId}/>);

  const input = await waitFor(() => screen.getByPlaceholderText('Where would you like to camp?'));
  expect(input).toBeDefined();
});


test('searching displays a loading message and then the search results', async () => {
  render(<Sidebar setSelectedCampgroundId={setSelectedCampgroundId}/>);

  const queryInput = screen.getByPlaceholderText('Where would you like to camp?');
  fireEvent.mouseEnter(queryInput);
  act(() => {
    fireEvent.change(queryInput, {target: {value: 'Creek'}});
    jest.advanceTimersByTime(1000);
  });

  expect(screen.getByText('Loading...')).toBeDefined();

  await waitFor(() => expect(screen.getByText('Eagle Creek')).toBeDefined());
});


test('calls setSelectedCampgroundId when campground selected from search dropdown', async () => {
  render(<Sidebar setSelectedCampgroundId={setSelectedCampgroundId}/>);

  const queryInput = screen.getByPlaceholderText('Where would you like to camp?');
  fireEvent.mouseEnter(queryInput);
  act(() => {
    fireEvent.change(queryInput, {target: {value: 'Creek'}});
    jest.advanceTimersByTime(1000);
  });

  const option = await waitFor(() => screen.getByText('Eagle Creek'));

  act(() => {
    fireEvent.click(option);
  });

  expect(setSelectedCampgroundId).toHaveBeenCalled();
});
