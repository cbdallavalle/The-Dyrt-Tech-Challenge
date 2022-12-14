type Coordinates = {
  lon: number,
  lat: number,
}

export type Result = {
  _index: string,
  _type: string,
  _id: string,
  _score: number,
  photoUrl: string | null,
  coordinates: Coordinates,
  name: string,
  videos_count: number,
  region_name: string,
  id: number,
  type: string,
  region: string,
  slug: string,
  reviews_count: number,
  photos_count: number,
}

export type Campground = {
  id: string,
  type: string
  links: {
    self: string
  }
  attributes: any
  relationships: any
}

const searchResults: Result[] = [
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '37436',
    _score: 24.386667,
    photoUrl: null,
    coordinates: {
      lon: -83.83001996,
      lat: 38.72070549,
    },
    name: 'Eagle Creek',
    videos_count: 0,
    region_name: 'Ohio',
    id: 37436,
    type: 'campground',
    region: 'OH',
    slug: 'eagle-creek',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '37880',
    _score: 24.386667,
    photoUrl:
      'https://thedyrt.imgix.net/photo/146087/media/eagle-area_cd37aba34317e6d78173eecd17096ae5.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -106.82728475,
      lat: 39.65229742,
    },
    name: 'Eagle Area',
    videos_count: 0,
    region_name: 'Colorado',
    id: 37880,
    type: 'campground',
    region: 'CO',
    slug: 'eagle-area',
    reviews_count: 3,
    photos_count: 5,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '65268',
    _score: 24.386667,
    photoUrl: null,
    coordinates: {
      lon: -141.235879,
      lat: 64.79193716,
    },
    name: 'Eagle campground',
    videos_count: 0,
    region_name: 'Alaska',
    id: 65268,
    type: 'campground',
    region: 'AK',
    slug: 'eagle-campground-2',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '16711',
    _score: 24.386667,
    photoUrl: null,
    coordinates: {
      lon: -143.19469825148587,
      lat: 63.1636922956431,
    },
    name: 'Eagle Trail',
    videos_count: 0,
    region_name: 'Alaska',
    id: 16711,
    type: 'campground',
    region: 'AK',
    slug: 'alaska-eagle-trail-state-recreational-site',
    reviews_count: 1,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '26144',
    _score: 24.386667,
    photoUrl: null,
    coordinates: {
      lon: -101.95580455,
      lat: 41.26969706,
    },
    name: 'Eagle Canyon',
    videos_count: 0,
    region_name: 'Nebraska',
    id: 26144,
    type: 'campground',
    region: 'NE',
    slug: 'nebraska-lake-mcconaughy-state-recreation-area-eagle-canyon',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '17593',
    _score: 24.386667,
    photoUrl:
      'https://thedyrt.imgix.net/photo/524445/media/arkansas-war-eagle-campground_ef1728f3-a0a1-42bc-a447-5a355e83d1ce.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -94.01879036,
      lat: 36.21909516,
    },
    name: 'War Eagle',
    videos_count: 0,
    region_name: 'Arkansas',
    id: 17593,
    type: 'campground',
    region: 'AR',
    slug: 'arkansas-war-eagle-campground',
    reviews_count: 7,
    photos_count: 12,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '451',
    _score: 24.386667,
    photoUrl:
      'https://thedyrt.imgix.net/photo/172153/media/eagle-cabin_4b66f6b04e6fa5ccb7632158f1a9a4eb.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -139.51226299,
      lat: 59.55626307,
    },
    name: 'Eagle Cabin',
    videos_count: 0,
    region_name: 'Alaska',
    id: 451,
    type: 'campground',
    region: 'AK',
    slug: 'eagle-cabin',
    reviews_count: 0,
    photos_count: 8,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '18051',
    _score: 24.386667,
    photoUrl:
      'https://thedyrt.imgix.net/photo/177705/media/california-eagle_1fe979e907ada56280fe34230d060859.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -120.78305555,
      lat: 40.54785011,
    },
    name: 'Eagle Campground',
    videos_count: 2,
    region_name: 'California',
    id: 18051,
    type: 'campground',
    region: 'CA',
    slug: 'california-eagle',
    reviews_count: 3,
    photos_count: 16,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '24655',
    _score: 24.386667,
    photoUrl:
      'https://thedyrt.imgix.net/photo/583534/media/missouri-eagle-rock_307b6873-0b6a-4c83-976e-6c7a3a741dac.heic?ixlib=rb-3.1.1',
    coordinates: {
      lon: -93.73000082,
      lat: 36.52722269,
    },
    name: 'Eagle Rock',
    videos_count: 0,
    region_name: 'Missouri',
    id: 24655,
    type: 'campground',
    region: 'MO',
    slug: 'missouri-eagle-rock',
    reviews_count: 5,
    photos_count: 37,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '28440',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -117.26100027,
      lat: 44.89100021,
    },
    name: 'Eagle Forks Campground',
    videos_count: 0,
    region_name: 'Oregon',
    id: 28440,
    type: 'campground',
    region: 'OR',
    slug: 'oregon-eagle-forks-campground',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '33516',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/612591/media/flying-eagle-preserve_c35a700b-642d-4868-b1b5-c55ad3d23965.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -82.24895284161035,
      lat: 28.820315961044123,
    },
    name: 'Flying Eagle Preserve',
    videos_count: 1,
    region_name: 'Florida',
    id: 33516,
    type: 'campground',
    region: 'FL',
    slug: 'flying-eagle-preserve',
    reviews_count: 4,
    photos_count: 4,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '34201',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/619553/media/eagle-bluff-resort_fde228a0-329d-41aa-9879-d22332798ee6.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -94.91506775,
      lat: 36.03376531,
    },
    name: 'Eagle Bluff Resort',
    videos_count: 2,
    region_name: 'Oklahoma',
    id: 34201,
    type: 'campground',
    region: 'OK',
    slug: 'eagle-bluff-resort',
    reviews_count: 9,
    photos_count: 29,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '37334',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -115.13333736,
      lat: 46.41688958,
    },
    name: 'Eagle Mountain Trailhead',
    videos_count: 0,
    region_name: 'Idaho',
    id: 37334,
    type: 'campground',
    region: 'ID',
    slug: 'eagle-mountain-trailhead',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '37469',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/636912/media/bald-eagle-creek_60e4fd3c-bce5-4323-ac66-5bef5a8654dd.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -100.55173718,
      lat: 31.51698378,
    },
    name: 'Bald Eagle Creek',
    videos_count: 0,
    region_name: 'Texas',
    id: 37469,
    type: 'campground',
    region: 'TX',
    slug: 'bald-eagle-creek',
    reviews_count: 2,
    photos_count: 4,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '37822',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/653591/media/eagle-crags-trail_ebb34128-e09c-47f8-9da1-35947eefdef5.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -113.03107975,
      lat: 37.14751452,
    },
    name: 'Eagle Crags Trail',
    videos_count: 2,
    region_name: 'Utah',
    id: 37822,
    type: 'campground',
    region: 'UT',
    slug: 'eagle-crags-trail',
    reviews_count: 5,
    photos_count: 12,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '43638',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -89.81860481,
      lat: 43.64988865,
    },
    name: 'Eagle Flats Campground',
    videos_count: 0,
    region_name: 'Wisconsin',
    id: 43638,
    type: 'campground',
    region: 'WI',
    slug: 'eagle-flats-campground-and-rv-pk',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '44075',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/699494/media/golden-eagle-campground-2_e84c5071-5538-4b2d-b0da-ef18bf7a617f.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -95.4918,
      lat: 46.57460056,
    },
    name: 'Golden Eagle Campground',
    videos_count: 0,
    region_name: 'Minnesota',
    id: 44075,
    type: 'campground',
    region: 'MN',
    slug: 'golden-eagle-campground-2',
    reviews_count: 2,
    photos_count: 8,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '47629',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/126483/media/eagle-rock-campground-2_5d392d437960e132b234fcf365b8d9d3.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -105.56195097,
      lat: 36.70169001,
    },
    name: 'Eagle Rock Campground',
    videos_count: 0,
    region_name: 'New Mexico',
    id: 47629,
    type: 'campground',
    region: 'NM',
    slug: 'eagle-rock-campground-2',
    reviews_count: 1,
    photos_count: 11,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '49577',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/665381/media/kanopolis-state-park-eagle-point-campground_68798d60-7eec-4813-a2d7-d3e91db88ca2.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -98.00550397,
      lat: 38.65188216,
    },
    name: 'Eagle Point Campground',
    videos_count: 0,
    region_name: 'Kansas',
    id: 49577,
    type: 'campground',
    region: 'KS',
    slug: 'kanopolis-state-park-eagle-point-campground',
    reviews_count: 2,
    photos_count: 15,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '59075',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/162664/media/eagle-cliff-store-and-campground_fc253f8b0913c11290e8be08601bbdef.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -122.01813818,
      lat: 46.0619891,
    },
    name: 'Eagle Cliff Campground',
    videos_count: 0,
    region_name: 'Washington',
    id: 59075,
    type: 'campground',
    region: 'WA',
    slug: 'eagle-cliff-campground-wa',
    reviews_count: 4,
    photos_count: 32,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '60744',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -101.33913997,
      lat: 37.19693764,
    },
    name: 'Eagle RV Park',
    videos_count: 0,
    region_name: 'Kansas',
    id: 60744,
    type: 'campground',
    region: 'KS',
    slug: 'eagle-rv-park-2',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '60993',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -94.7424004,
      lat: 47.67550094,
    },
    name: 'Eagle Ridge Resort',
    videos_count: 0,
    region_name: 'Minnesota',
    id: 60993,
    type: 'campground',
    region: 'MN',
    slug: 'eagle-ridge-resort',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '63197',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -84.52730081,
      lat: 34.6708007,
    },
    name: 'Eagle Mountain Chalet',
    videos_count: 0,
    region_name: 'Georgia',
    id: 63197,
    type: 'campground',
    region: 'GA',
    slug: 'eagle-mountain-chalet',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '64406',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -89.46940036,
      lat: 42.14710029,
    },
    name: 'Camp White Eagle',
    videos_count: 0,
    region_name: 'Illinois',
    id: 64406,
    type: 'campground',
    region: 'IL',
    slug: 'camp-white-eagle',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '65540',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/464470/media/eagle-mountain-eyrie_210bd96c-151f-4686-96f4-5db5233a2ec6.jpeg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -74.53764418,
      lat: 42.06621203,
    },
    name: 'Eagle Mountain Eyrie',
    videos_count: 0,
    region_name: 'New York',
    id: 65540,
    type: 'campground',
    region: 'NY',
    slug: 'eagle-mountain-eyrie',
    reviews_count: 0,
    photos_count: 19,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '65882',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/678594/media/eagle-ridge-campground_82546c81-4520-4dd6-8680-943694f848b0.jpg?ixlib=rb-3.1.1',
    coordinates: {
      lon: -91.43835755,
      lat: 44.91490508,
    },
    name: 'Eagle Ridge Campground',
    videos_count: 0,
    region_name: 'Wisconsin',
    id: 65882,
    type: 'campground',
    region: 'WI',
    slug: 'eagle-ridge-campground',
    reviews_count: 3,
    photos_count: 7,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '76702',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -90.5405004,
      lat: 43.24374015,
    },
    name: 'Eagle Cave Resort',
    videos_count: 0,
    region_name: 'Wisconsin',
    id: 76702,
    type: 'campground',
    region: 'WI',
    slug: 'eagle-cave-natural-park',
    reviews_count: 2,
    photos_count: 7,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '77758',
    _score: 21.068533,
    photoUrl:
      'https://thedyrt.imgix.net/photo/561185/media/eagle-canyon-hideaway_51da6c57-7373-480a-bf89-867eabc52960.heic?ixlib=rb-3.1.1',
    coordinates: {
      lon: -101.91960082,
      lat: 41.26133072,
    },
    name: 'Eagle Canyon Hideaway',
    videos_count: 0,
    region_name: 'Nebraska',
    id: 77758,
    type: 'campground',
    region: 'NE',
    slug: 'eagle-canyon-hideaway',
    reviews_count: 1,
    photos_count: 5,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '79067',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -123.1539494,
      lat: 46.81595046,
    },
    name: 'Eagle RV Park',
    videos_count: 0,
    region_name: 'Washington',
    id: 79067,
    type: 'campground',
    region: 'WA',
    slug: 'eagle-rv-park-3',
    reviews_count: 0,
    photos_count: 0,
  },
  {
    _index: 'campgrounds_production_20210723113738837',
    _type: 'campground',
    _id: '79376',
    _score: 21.068533,
    photoUrl: null,
    coordinates: {
      lon: -121.95304097,
      lat: 42.4058263,
    },
    name: 'Eagle Ridge Park',
    videos_count: 0,
    region_name: 'Oregon',
    id: 79376,
    type: 'campground',
    region: 'OR',
    slug: 'klamath-county-eagle-ridge-park',
    reviews_count: 0,
    photos_count: 0,
  },
];

export default searchResults;