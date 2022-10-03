import {render, screen, act, waitFor} from '@testing-library/react';
import CampgroundOverview from './';

const mockResponse = {
  data: {
    attributes: {
      name: 'Cool Campground',
      'permanently-closed': false,
      'access-types': ['drive-in', 'hike-in'],
      address: '1234 address ln, Denver CO, 80555',
      'accommodation-types': ['rv', 'tent'],
      "photo-url": null,
      "phone-number": "123-444-1232"
    }
  }
};

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  });

  jest.useFakeTimers();
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

test('loads and displays empty state', () => {
  render(<CampgroundOverview/>);

  expect(screen.getByText('Select a campground to view details.'));
});

test('displays a loading message and then the campground details', async () => {
  act(() => {
    render(<CampgroundOverview selectedCampgroundId={1}/>);
    jest.advanceTimersByTime(1000);
  });

  expect(screen.getByText('Loading...'));

  const campName = await waitFor(() => screen.findByText('Cool Campground'));
  
  expect(campName).toBeDefined();
});