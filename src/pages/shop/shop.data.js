import BBP from '../../assets/pics2/barbell_bench_press.jpg';
import DBP from '../../assets/pics2/dumbbell_bench_press.jpg';
import BIB from '../../assets/pics2/barbell_incline_bench.jpg';
import IP from '../../assets/pics2/incline_push-ups.jpg';

import PU from '../../assets/pics2/pull_up.jpg';
import R from '../../assets/pics2/rowing.jpg';
import BR from '../../assets/pics2/barbell_rowing.jpg';
import LP from '../../assets/pics2/lat_pulldown.jpg';

import SQ from '../../assets/pics2/squat.png';
import DE from '../../assets/pics2/deadlift.jpg';
import LU from '../../assets/pics2/lunge.jpeg';
import LEP from '../../assets/pics2/leg_press.jpg';

import BSP from '../../assets/pics2/barbell_shoulder_press.jpg';
import HP from '../../assets/pics2/handstand_push-ups.jpeg';
import DF from '../../assets/pics2/dumbbell_fly.jpg';
import LR from '../../assets/pics2/lateral_raise.jpg';

import LS from '../../assets/pics2/L-sit.jpeg';
import RT from '../../assets/pics2/russian_twist.jpg';
import SP from '../../assets/pics2/side_plank.jpg';
import PL from '../../assets/pics2/plank.jpg';

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
          id: 6,
          name: 'pull up',
          imageUrl: PU,
          price: 220
        },
        {
          id: 7,
          name: 'rowing',
          imageUrl: R,
          price: 280
        },
        {
          id: 8,
          name: 'barbell rowing',
          imageUrl: BR,
          price: 110
        },
        {
          id: 9,
          name: 'lat pulldown',
          imageUrl: LP,
          price: 160
        },
        {
          id: 10,
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
          id: 11,
          name: 'squat',
          imageUrl: SQ,
          price: 125
        },
        {
          id: 12,
          name: 'deadlift',
          imageUrl: DE,
          price: 90
        },
        {
          id: 13,
          name: 'lunge',
          imageUrl: LU,
          price: 90
        },
        {
          id: 14,
          name: 'leg press',
          imageUrl: LEP,
          price: 165
        },
        {
          id: 15,
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
          id: 16,
          name: 'barbell shoulder press',
          imageUrl: BSP,
          price: 25
        },
        {
          id: 17,
          name: 'handstand push-ups',
          imageUrl: HP,
          price: 20
        },
        {
          id: 18,
          name: 'dumbbell fly',
          imageUrl: DF,
          price: 80
        },
        {
          id: 19,
          name: 'lateral raise',
          imageUrl: LR,
          price: 80
        },
        {
          id: 20,
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
          id: 21,
          name: 'L-Sit',
          imageUrl: LS,
          price: 325
        },
        {
          id: 22,
          name: 'russian twist',
          imageUrl: RT,
          price: 20
        },
        {
          id: 23,
          name: 'side plank',
          imageUrl: SP,
          price: 25
        },
        {
          id: 24,
          name: 'plank',
          imageUrl: PL,
          price: 25
        },
        {
          id: 25,
          name: 'additional',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        }
      ]
    }
  ]

export default SHOP_DATA;