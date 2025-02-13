// data/products.ts
import { Product } from "./Product";

export const products: Product[] = [
  {
    id: 'note_1',
    name: 'Specialist Mathematics Bound Reference',
    price: 15,
    desc: [
        'Raw 50 Exam 2 Bound Reference',
        'Doubles as notes for every chapter + CAS tips',
        'Written on iPad',
    ],
  },
  {
    id: 'note_2',
    name: 'Chemistry Notes',
    price: 25,
    desc: [
        'Raw 50 + International Chemistry Olympiad Bronze Medal Notes',
        'Covers all topics with diagrams',
        'Written on iPad',
    ],
  },
  {
    id: 'note_3',
    name: 'Physics Notes',
    price: 20,
    desc: [
        'Raw 46 Notes',
        'Covers all topics with diagrams',
        'Written on iPad',
    ],
  },
  {
    id: 'note_4',
    name: 'Mathematical Methods Bound Reference',
    price: 15,
    desc: [
        'Scan of Raw 49 Exam 2 Bound Reference',
    ],
  },
  {
    id: 'eng_1',
    name: "Rainbow's End Essay Collection",
    price: 20,
    desc: [
        '5850 words',
        '3 practice essays + SAC essay (39/40)',
        'Also includes detailed plans and some vocab Chris collected',
    ],
  },
  {
    id: 'eng_2',
    name: 'Runaway Essay Collection',
    price: 10,
    desc: [
        '(not in study design anymore)',
        '4 practice essays (~1100 words each) + SAC essay (40/40)',
        '20/20 on Exam Section A writing on Runaway',
    ],
  },
  {
    id: 'eng_3',
    name: 'Persuasive Speech',
    price: 5,
    desc: [
        'About the rise of AI and how we shouldn’t be too worried about its impact on our jobs',
    ],
  },
  {
    id: 'eng_4',
    name: 'Audiovisual Analysis',
    price: 10,
    desc: [
        '40/40 SAC essay',
        'Includes original instructions and articles',
    ],
  },
  {
    id: 'eng_5',
    name: 'Section B Essay 1',
    price: 10,
    desc: [
        '40/40 SAC essay with commentary',
        "Quote from past VCAA assessor that marked it: ‘Wow! It has taken more than 100 essays before I’ve met something of this calibre with compelling reasoning and expression skills.’ ",
    ],
  },
  {
    id: 'eng_6',
    name: 'Section B Essay 2',
    price: 10,
    desc: [
        '20/20 SAC essay which I adapted into a 19/20 essay for exam',
        'Chris estimates 95% of what he wrote was the same on the exam',
    ],
  },
  {
    id: 'eng_7',
    name: 'Section C Essay',
    price: 10,
    desc: [
        '5 essays based off of past exam Section Cs',
        'Chris received a 18/20 for Section C on exam',
    ],
  },
  // Add more products as needed
];