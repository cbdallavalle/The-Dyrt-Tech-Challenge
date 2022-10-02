import {render, screen, fireEvent, waitFor, act} from '@testing-library/react'
import Sidebar from '.'
import searchResuls from '../../data/searchResults'

let setSelectedCampgroundId;

beforeEach(() => {
  setSelectedCampgroundId = jest.fn();

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue([searchResuls[0]])
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('loads and displays empty state', () => {
  render(<Sidebar setSelectedCampgroundId={setSelectedCampgroundId}/>);

  expect(screen.getByPlaceholderText('Where would you like to camp?'));
})

test('displays a loading message searching', async () => {
  render(<Sidebar setSelectedCampgroundId={setSelectedCampgroundId}/>);

  const queryInput = screen.getByPlaceholderText('Where would you like to camp?');
  fireEvent.mouseEnter(queryInput)
  fireEvent.change(queryInput, {target: {value: 'Creek'}})

  expect(screen.getByText('Loading...')).toBeDefined();
})


test('displays results on search', async () => {
  render(<Sidebar setSelectedCampgroundId={setSelectedCampgroundId}/>);

  const queryInput = screen.getByPlaceholderText('Where would you like to camp?');
  fireEvent.mouseEnter(queryInput)
  act(() => {
    fireEvent.change(queryInput, {target: {value: 'Creek'}})
  })

  await waitFor(() => expect(screen.getByText('Eagle Creek')).toBeDefined());
})


test('calls setSelectedCampgroundId when campground selected from search dropdown', async () => {
  render(<Sidebar setSelectedCampgroundId={setSelectedCampgroundId}/>);

  const queryInput = screen.getByPlaceholderText('Where would you like to camp?');
  fireEvent.mouseEnter(queryInput)
  act(() => {
    fireEvent.change(queryInput, {target: {value: 'Creek'}})
  })


  const option = await waitFor(() => screen.getByText('Eagle Creek'));

  fireEvent.click(option)

  expect(setSelectedCampgroundId).toHaveBeenCalled()
})
