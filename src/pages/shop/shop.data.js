import BBP from '../../assets/pics2/barbell_bench_press.jpg';
import DBP from '../../assets/pics2/dumbbell_bench_press.jpg';
import BIB from '../../assets/pics2/barbell_incline_bench.jpg';
import IP from '../../assets/pics2/incline_push-ups.jpg';

import PU from '../../assets/pics2/pull_up.jpg';
import R from '../../assets/pics2/rowing.jpg';
import BR from '../../assets/pics2/barbell_rowing.jpg';
import LP from '../../assets/pics2/lat_pulldown.jpg';

import S from '../../assets/pics2/squat.png';
import D from '../../assets/pics2/deadlift.jpg';
import L from '../../assets/pics2/lunge.jpeg';

const SHOP_DATA = [
    {
      id: 1,
      title: 'chest',
      routeName: 'chest',
      items: [
        {
          id: 1,
          name: 'barbell bench press',
          imageUrl: BBP,
          price: 25
        },
        {
          id: 2,
          name: 'dumbbell bench press',
          imageUrl: DBP,
          price: 18
        },
        {
          id: 3,
          name: 'barbell incline bench',
          imageUrl: BIB,
          price: 35
        },
        {
          id: 4,
          name: 'incline push-ups',
          imageUrl: IP,
          price: 25
        },
        {
          id: 5,
          name: 'additional',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        }
      ]
    },
    {
      id: 2,
      title: 'back',
      routeName: 'back',
      items: [
        {
          id: 1,
          name: 'pull up',
          imageUrl: PU,
          price: 220
        },
        {
          id: 2,
          name: 'rowing',
          imageUrl: R,
          price: 280
        },
        {
          id: 3,
          name: 'barbell rowing',
          imageUrl: BR,
          price: 110
        },
        {
          id: 4,
          name: 'lat pulldown',
          imageUrl: LP,
          price: 160
        },
        {
          id: 5,
          name: 'additional',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        }
      ]
    },
    {
      id: 3,
      title: 'legs',
      routeName: 'legs',
      items: [
        {
          id: 1,
          name: 'squat',
          imageUrl: S,
          price: 125
        },
        {
          id: 2,
          name: 'deadlift',
          imageUrl: D,
          price: 90
        },
        {
          id: 3,
          name: 'lunge',
          imageUrl: L,
          price: 90
        },
        {
          id: 4,
          name: 'leg press',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 5,
          name: 'additional',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'shoulder',
      routeName: 'shoulder',
      items: [
        {
          id: 1,
          name: 'barbell shoulder press',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 2,
          name: 'handstand push-ups',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 3,
          name: 'dumbbell fly',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 4,
          name: 'lateral raise',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 5,
          name: 'additional',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        }
      ]
    },
    {
      id: 5,
      title: 'core',
      routeName: 'core',
      items: [
        {
          id: 1,
          name: 'L-sit',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 2,
          name: 'russian twist',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 3,
          name: 'side plank',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 4,
          name: 'plank',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 5,
          name: 'additional',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        }
      ]
    }
  ]

export default SHOP_DATA;