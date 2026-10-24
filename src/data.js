// Course data taken from the XHAW5112 brief (Scenario 1: Pet Care & Training Academy).
// Images are free Unsplash photos - replace the URLs with the photos used in your Figma design.
export const courses = [
  {
    id: 'obedience',
    name: 'Canine Obedience Training',
    type: 'Six-month',
    duration: '12 weeks',
    fee: 1500,
    purpose: 'To teach dogs basic obedience and good manners.',
    content: ['Sit, stay and come', 'Leash training', 'Socialisation', 'Behaviour correction', 'Owner handling skills'],
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
  },
  {
    id: 'grooming',
    name: 'Pet Grooming',
    type: 'Six-month',
    duration: '12 weeks',
    fee: 1500,
    purpose: 'To train learners in professional pet grooming.',
    content: ['Bathing and drying', 'Brushing and de-matting', 'Nail and ear care', 'Coat styling', 'Grooming equipment'],
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600',
  },
  {
    id: 'behaviour',
    name: 'Animal Behaviour',
    type: 'Six-month',
    duration: '12 weeks',
    fee: 1500,
    purpose: 'To help learners understand and manage pet behaviour.',
    content: ['Body language', 'Common behaviour problems', 'Positive reinforcement', 'Stress and anxiety', 'Behaviour plans'],
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600',
  },
  {
    id: 'business',
    name: 'Pet Business Management',
    type: 'Six-month',
    duration: '12 weeks',
    fee: 1500,
    purpose: 'To prepare learners to operate a successful pet-related business.',
    content: ['Customer service', 'Marketing', 'Business planning', 'Financial management', 'Legal requirements'],
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600',
  },
  {
    id: 'puppy',
    name: 'Puppy Care',
    type: 'Six-week',
    duration: '6 weeks',
    fee: 750,
    purpose: 'To provide new puppy owners with essential care knowledge.',
    content: ['Feeding', 'Vaccinations', 'Toilet training', 'Exercise', 'Socialisation'],
    image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=600',
  },
  {
    id: 'firstaid',
    name: 'Pet First Aid',
    type: 'Six-week',
    duration: '6 weeks',
    fee: 750,
    purpose: 'To provide emergency first aid knowledge for pets.',
    content: ['Minor injuries', 'CPR basics', 'Poison awareness', 'Heatstroke', 'Emergency transport'],
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600',
  },
  {
    id: 'walking',
    name: 'Basic Dog Walking',
    type: 'Six-week',
    duration: '6 weeks',
    fee: 750,
    purpose: 'To teach safe and professional dog walking practices.',
    content: ['Walking equipment', 'Handling multiple dogs', 'Safety procedures', 'Exercise routines'],
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600',
  },
];

export const VAT_RATE = 0.15;

// 1 course = 0%, 2 = 5%, 3 = 10%, more than 3 = 15%
export function discountRate(count) {
  if (count > 3) return 0.15;
  if (count === 3) return 0.1;
  if (count === 2) return 0.05;
  return 0;
}

export function calculateQuote(selectedCourses) {
  const subtotal = selectedCourses.reduce((sum, c) => sum + c.fee, 0);
  const rate = discountRate(selectedCourses.length);
  const discount = subtotal * rate;
  const afterDiscount = subtotal - discount;
  const vat = afterDiscount * VAT_RATE;
  return { subtotal, rate, discount, afterDiscount, vat, total: afterDiscount + vat };
}

export const money = (n) => 'R' + n.toFixed(2);
