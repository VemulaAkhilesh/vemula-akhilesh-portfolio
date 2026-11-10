export type Skill = {
  name: string
  mark?: string
  color: string
}

export type SkillGroup = {
  id: string
  title: string
  items: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: [
      { name: 'Java', mark: 'java', color: '#0074BD' },
      { name: 'JavaScript', mark: 'javascript', color: '#F7DF1E' },
      { name: 'TypeScript', mark: 'typescript', color: '#3178C6' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    items: [
      { name: 'React Native', mark: 'react', color: '#61DAFB' },
      { name: 'Android (Java)', mark: 'android', color: '#3DDC84' },
      { name: 'Android SDK', color: '#3DDC84' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Technologies',
    items: [
      { name: 'JSX', color: '#61DAFB' },
      { name: 'XML', color: '#E76F00' },
      { name: 'Styled Components', mark: 'styledcomponents', color: '#DB7093' },
      { name: 'Responsive UI', color: '#55C9F5' },
    ],
  },
  {
    id: 'state',
    title: 'State Management',
    items: [
      { name: 'Redux', mark: 'redux', color: '#764ABC' },
      { name: 'Context API', color: '#61DAFB' },
      { name: 'Zustand', color: '#8B9EFF' },
    ],
  },
  {
    id: 'api',
    title: 'Backend & API Integration',
    items: [
      { name: 'REST APIs', color: '#55C9F5' },
      { name: 'Axios', mark: 'axios', color: '#5A29E4' },
      { name: 'Fetch', color: '#C4B5FD' },
      { name: 'PayU', color: '#00ADEF' },
      { name: 'Cashfree', color: '#00C2A8' },
      { name: 'Razorpay', mark: 'razorpay', color: '#3395FF' },
      { name: 'BBPS', color: '#F47920' },
      { name: 'Google Sign-In', mark: 'google', color: '#4285F4' },
      { name: 'Facebook Login', mark: 'facebook', color: '#0866FF' },
      { name: 'Apple Sign-In', mark: 'apple', color: '#FFFFFF' },
      { name: 'Firebase Cloud Messaging', mark: 'firebase', color: '#FFCA28' },
      { name: 'Firebase Analytics', mark: 'firebase', color: '#FFCA28' },
      { name: 'Google Analytics', mark: 'googleanalytics', color: '#E37400' },
      { name: 'Google Maps', mark: 'googlemaps', color: '#34A853' },
      { name: 'Geolocation', color: '#34A853' },
      { name: 'AsyncStorage', color: '#C4B5FD' },
    ],
  },
  {
    id: 'ai',
    title: 'AI tools',
    items: [
      { name: 'Cursor', mark: 'cursor', color: '#F5F7FF' },
      { name: 'Antigravity', color: '#8B9EFF' },
      { name: 'Claude', mark: 'claude', color: '#D97757' },
      { name: 'Windsurf', mark: 'windsurf', color: '#F5F7FF' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', mark: 'git', color: '#F05032' },
      { name: 'GitHub', mark: 'github', color: '#FFFFFF' },
      { name: 'Postman', mark: 'postman', color: '#FF6C37' },
      { name: 'Android Studio', mark: 'androidstudio', color: '#3DDC84' },
      { name: 'Xcode', mark: 'xcode', color: '#147EFB' },
      { name: 'VS Code', mark: 'visualstudiocode', color: '#007ACC' },
      { name: 'Google Play Store', mark: 'googleplay', color: '#34A853' },
      { name: 'Apple App Store', mark: 'apple', color: '#FFFFFF' },
    ],
  },
]
