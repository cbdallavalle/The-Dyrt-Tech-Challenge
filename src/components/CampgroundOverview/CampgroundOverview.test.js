import {render, screen, act} from '@testing-library/react'
import CampgroundOverview from './'

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
}

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('loads and displays empty state', () => {
  render(<CampgroundOverview/>)

  expect(screen.getByText('Select a campground to view details.'))
})

test('displays a loading message when fetch is made', () => {
  render(<CampgroundOverview selectedCampgroundId={1}/>)

  expect(screen.getByText('Loading...'))
})

test('displays campground details on successful fetch', async () => {
  jest.useFakeTimers();
  act(() => {
    render(<CampgroundOverview selectedCampgroundId={1}/>)
    jest.advanceTimersByTime(1000);
  });
  expect(screen.findByText('Cool Campground')).toBeDefined()
})