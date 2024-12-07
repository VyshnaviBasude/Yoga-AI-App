import { Problem, YogaPose } from '../types/yoga';

export const commonProblems: Problem[] = [
  {
    id: 'stress',
    category: 'Mental Health',
    description: 'Stress and Anxiety'
  },
  {
    id: 'backPain',
    category: 'Physical Health',
    description: 'Back Pain'
  },
  {
    id: 'flexibility',
    category: 'Fitness',
    description: 'Improve Flexibility'
  },
  {
    id: 'sleep',
    category: 'Wellness',
    description: 'Better Sleep'
  },
  {
    id: 'energy',
    category: 'Wellness',
    description: 'Boost Energy'
  },
  {
    id: 'digestion',
    category: 'Physical Health',
    description: 'Improve Digestion'
  }
];

export const yogaPoses: Record<string, YogaPose[]> = {
  stress: [
    {
      name: 'Child\'s Pose',
      sanskritName: 'Balasana',
      benefits: ['Calms the mind', 'Relieves stress', 'Relaxes the body'],
      videoUrl: 'https://www.youtube.com/watch?v=2MJGg-dUKh0',
      youtuber: 'Yoga With Adriene',
      views: 2500000,
      duration: '10:00',
      level: 'Beginner'
    },
    {
      name: 'Corpse Pose',
      sanskritName: 'Savasana',
      benefits: ['Deep relaxation', 'Reduces anxiety', 'Improves sleep'],
      videoUrl: 'https://www.youtube.com/watch?v=J2pCJnNCtKc',
      youtuber: 'Fightmaster Yoga',
      views: 1800000,
      duration: '15:00',
      level: 'Beginner'
    }
  ],
  backPain: [
    {
      name: 'Cat-Cow Stretch',
      sanskritName: 'Marjaryasana-Bitilasana',
      benefits: ['Spinal flexibility', 'Back pain relief', 'Core strength'],
      videoUrl: 'https://www.youtube.com/watch?v=kqnua4rHVVA',
      youtuber: 'Yoga With Kassandra',
      views: 3200000,
      duration: '12:00',
      level: 'Beginner'
    },
    {
      name: 'Downward-Facing Dog',
      sanskritName: 'Adho Mukha Svanasana',
      benefits: ['Stretches spine', 'Strengthens back', 'Improves posture'],
      videoUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      youtuber: 'Yoga With Adriene',
      views: 4100000,
      duration: '8:00',
      level: 'Beginner'
    }
  ],
  flexibility: [
    {
      name: 'Forward Fold',
      sanskritName: 'Uttanasana',
      benefits: ['Increases flexibility', 'Stretches spine and hamstrings', 'Calms the mind'],
      videoUrl: 'https://www.youtube.com/watch?v=g7Uhp5tphAs',
      youtuber: 'Yoga With Adriene',
      views: 1500000,
      duration: '8:00',
      level: 'Beginner'
    },
    {
      name: 'Pigeon Pose',
      sanskritName: 'Eka Pada Rajakapotasana',
      benefits: ['Hip flexibility', 'Releases tension', 'Improves mobility'],
      videoUrl: 'https://www.youtube.com/watch?v=FVXxYjL_rXA',
      youtuber: 'Yoga With Kassandra',
      views: 2800000,
      duration: '15:00',
      level: 'Intermediate'
    }
  ],
  sleep: [
    {
      name: 'Legs Up the Wall',
      sanskritName: 'Viparita Karani',
      benefits: ['Improves sleep quality', 'Reduces anxiety', 'Relieves tired legs'],
      videoUrl: 'https://www.youtube.com/watch?v=2vHP3OxK3o4',
      youtuber: 'Yoga With Kassandra',
      views: 980000,
      duration: '15:00',
      level: 'Beginner'
    },
    {
      name: 'Reclined Bound Angle',
      sanskritName: 'Supta Baddha Konasana',
      benefits: ['Promotes relaxation', 'Reduces insomnia', 'Calms nervous system'],
      videoUrl: 'https://www.youtube.com/watch?v=xqQiZR_oDfk',
      youtuber: 'Yoga With Adriene',
      views: 1200000,
      duration: '10:00',
      level: 'Beginner'
    }
  ],
  energy: [
    {
      name: 'Sun Salutation',
      sanskritName: 'Surya Namaskar',
      benefits: ['Increases energy', 'Improves circulation', 'Builds strength'],
      videoUrl: 'https://www.youtube.com/watch?v=8AakYeM1mVM',
      youtuber: 'Yoga With Adriene',
      views: 5200000,
      duration: '20:00',
      level: 'Beginner'
    },
    {
      name: 'Warrior I',
      sanskritName: 'Virabhadrasana I',
      benefits: ['Boosts energy', 'Strengthens legs', 'Improves focus'],
      videoUrl: 'https://www.youtube.com/watch?v=k4qaVoAbeHM',
      youtuber: 'Fightmaster Yoga',
      views: 1500000,
      duration: '12:00',
      level: 'Beginner'
    }
  ],
  digestion: [
    {
      name: 'Seated Twist',
      sanskritName: 'Ardha Matsyendrasana',
      benefits: ['Improves digestion', 'Detoxifies organs', 'Relieves bloating'],
      videoUrl: 'https://www.youtube.com/watch?v=HLjKxFT9ZsQ',
      youtuber: 'Yoga With Kassandra',
      views: 890000,
      duration: '10:00',
      level: 'Beginner'
    },
    {
      name: 'Wind-Relieving Pose',
      sanskritName: 'Pawanmuktasana',
      benefits: ['Aids digestion', 'Reduces gas', 'Massages abdomen'],
      videoUrl: 'https://www.youtube.com/watch?v=LX6TyHhV2kY',
      youtuber: 'Yoga With Adriene',
      views: 750000,
      duration: '8:00',
      level: 'Beginner'
    }
  ]
};