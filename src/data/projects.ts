import { shots } from './media.ts'

export type Shot = {
  src: string
  alt: string
}

export type Project = {
  id: string
  name: string
  client: string
  role: string
  summary: string
  features: string[]
  stack: string[]
  icon?: string
  shots: Shot[]
  posters?: Shot[]
  featured: boolean
  flip?: boolean
}

export const heroShots: Shot[] = [
  {
    src: shots.payzioHome,
    alt: 'PAYZIGO home with recharge, bill payments, coins, and coupons',
  },
  {
    src: shots.skilltechHome,
    alt: 'SkillTech LMS home with an upcoming exam and attendance',
  },
  {
    src: shots.ronoApplied,
    alt: 'Rono Jobs list of roles the user has applied for, in dark theme',
  },
  {
    src: shots.payzioBills,
    alt: 'PAYZIGO Bharat Bill Payments categories including electricity, gas, and water',
  },
]

export const projects: Project[] = [
  {
    id: 'sevaki',
    name: 'Sevaki',
    client: 'Sevaki Technology Pvt Ltd',
    role: 'React Native Developer',
    summary:
      'A home-services app for cleaning, pest control, men’s salon, and women’s spa. The booking path runs from the category through cart, address, slot, checkout, and tracking.',
    features: [
      'Full booking flow: service, cart, location, date and slot, checkout, confirmation, tracking.',
      'Screens for categories, service detail, cart, slots, checkout, history, and profile on Android and iOS.',
      'REST APIs for services, slot availability, booking creation, status, and history.',
      'Google Maps, SMS Retriever auto-OTP, and Firebase reminders.',
      'Google Analytics and Facebook Analytics for screens, conversions, and retention.',
      'Razorpay for payments, plus Play Store and iOS builds from Xcode.',
    ],
    stack: [
      'React Native',
      'JavaScript',
      'TypeScript',
      'Redux',
      'Zustand',
      'REST APIs',
      'Firebase',
      'Google Maps',
      'Razorpay',
    ],
    icon: shots.sevakiIcon,
    shots: [
      {
        src: shots.sevakiHome,
        alt: 'Sevaki home with cleaning and salon categories',
      },
      {
        src: shots.sevakiDetail,
        alt: 'Sevaki kitchen cleaning service with ratings and pricing',
      },
      {
        src: shots.sevakiSlot,
        alt: 'Sevaki booking slot screen',
      },
    ],
    featured: true,
  },
  {
    id: 'payzigo',
    name: 'PAYZIGO Consumer',
    client: 'Neo-teq Software Pvt Ltd',
    role: 'React Native Developer',
    summary:
      'A bill-payment and recharge app on Android and iOS. BBPS utilities, coins, coupons, KYC, and the payout work that earned a performance award.',
    features: [
      'BBPS bill pay and recharges for mobile, DTH, electricity, water, and gas.',
      'Screens for payment, transaction history, and confirmation.',
      'Earn-coins rewards and a coupon flow with apply, remove, and redemption APIs.',
      'Aadhaar and PAN KYC, plus secure sign-in.',
      'PayU and Cashfree for the payment path.',
      'Payout API integration for transfers, recognized with a Best Software Performance award.',
    ],
    stack: [
      'React Native',
      'JavaScript',
      'TypeScript',
      'REST APIs',
      'BBPS',
      'PayU',
      'Cashfree',
    ],
    icon: shots.payzioIcon,
    shots: [
      {
        src: shots.payzioHome,
        alt: 'PAYZIGO home with recharge, bill payments, coins, and coupons',
      },
      {
        src: shots.payzioBills,
        alt: 'Bharat Bill Payments grid inside PAYZIGO',
      },
      {
        src: shots.payzioLogin,
        alt: 'PAYZIGO M-PIN login',
      },
    ],
    featured: true,
    flip: true,
  },
  {
    id: 'rono',
    name: 'Rono Jobs',
    client: 'Rayudu Groups',
    role: 'React Native Developer',
    summary:
      'A job app for search, filters, apply, interview updates, resume templates, and a freelancer module. AI runs inside the app, and dark and light theme ship with it.',
    features: [
      'Search and filters by category, location, and experience, then view and apply.',
      'Profile and resume create or update, save, apply, and application tracking.',
      'Interview scheduling, resume template download, and freelancer gigs.',
      'AI inside the Rono Jobs app.',
      'REST APIs for jobs, profile, interviews, and templates.',
      'Firebase alerts for jobs, applications, and interviews.',
      'Dark theme and light theme across the app.',
    ],
    stack: ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'Zustand', 'REST APIs', 'Firebase', 'In-app AI'],
    icon: shots.ronoIcon,
    shots: [
      { src: shots.ronoApplied, alt: 'Rono Jobs applied-roles list in dark theme' },
      { src: shots.ronoResume, alt: 'Rono Jobs onboarding screen for building a resume' },
      { src: shots.ronoMenu, alt: 'Rono Jobs app screen' },
    ],
    featured: false,
  },
  {
    id: 'skilltech',
    name: 'SkillTech LMS',
    client: 'SkillTech Enterprise Solutions Private Limited',
    role: 'React Native Developer',
    summary:
      'A learning app for ITI students: courses, timed exams, attendance, and separate student and teacher sign-in.',
    features: [
      'Student and teacher login with role-based access.',
      'Online exams with a timer, auto-submit, and a locked exam flow.',
      'Attendance that students can view and teachers can record.',
      'REST APIs for auth, courses, exams, attendance, results, and profile.',
      'Firebase messages for exam schedules and announcements.',
    ],
    stack: ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'REST APIs', 'Firebase'],
    icon: shots.skilltechIcon,
    shots: [
      { src: shots.skilltechHome, alt: 'SkillTech student home with exam countdown and attendance' },
      { src: shots.skilltechExams, alt: 'SkillTech exam schedule with upcoming papers' },
      { src: shots.skilltechLogin, alt: 'SkillTech student and teacher login' },
    ],
    featured: false,
  },
  {
    id: 'bill-baro',
    name: 'Bill BARO',
    client: 'Neo-teq Software Pvt Ltd',
    role: 'Android Developer',
    summary:
      'Android modules for Bharat Bill Payment System flows, written in Java. Telecom recharge, transaction APIs, and the edge cases that keep a payment screen from failing quietly.',
    features: [
      'BBPS bill-payment modules on Android.',
      'Payment and transaction APIs aligned with BBPS expectations.',
      'Telecom operator recharge with validation and error handling.',
      'Debugging and performance work on the cases that usually break a payment.',
    ],
    stack: ['Java', 'Android SDK', 'REST APIs', 'BBPS'],
    shots: [],
    featured: false,
  },
]
