import { Shield, TrendingUp, Landmark, Users, Briefcase, Wallet } from 'lucide-react';

export const services = [
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    subtitle: 'Flexible financial solutions for Ugandan families.',
    icon: Users,
    description: 'Our personal loans offer quick access to funds with competitive interest rates and flexible repayment terms tailored to your income cycle.',
    features: [
      'Fast approval within 24-48 hours',
      'Flexible repayment periods up to 36 months',
      'No hidden processing fees',
      'Competitive interest rates'
    ],
    image: 'https://images.unsplash.com/photo-1573163281530-5be9c294873e?q=80&w=1200'
  },
  {
    id: 'business-financing',
    title: 'Business Financing',
    subtitle: 'Fueling growth for SMEs and local entrepreneurs.',
    icon: Landmark,
    description: 'Grow your business with our specialized financing options meant for asset acquisition, working capital, and expansion.',
    features: [
      'Tailored business advice and support',
      'Asset financing for machinery and vehicles',
      'Working capital for inventory management',
      'Group lending for market vendors'
    ],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200'
  }
];

// Home page products with detailed information
export const homePageProducts = [
  {
    id: 'personal-loans-home',
    title: 'Personal Loans',
    description: 'Quick cash for your personal needs. Up to UGX 50M with flexible repayment terms.',
    shortDescription: 'Quick cash for your personal needs. Up to UGX 50M with flexible repayment terms.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbiUyMG1vbmV5JTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjkxNzkxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Up to UGX 50M', '6-36 months', 'Low interest', 'Quick approval'],
    detailedFeatures: [
      'Fast approval within 24-48 hours',
      'Flexible repayment periods up to 36 months',
      'No hidden processing fees',
      'Competitive interest rates',
      'Multiple loan purposes supported',
      'Minimal documentation required'
    ],
    eligibility: [
      'Must be 18 years or older',
      'Ugandan citizen or resident',
      'Stable income source',
      'Valid identification document'
    ],
    applicationProcess: [
      'Submit online application form',
      'Provide required documents',
      'Verification and assessment',
      'Loan approval and disbursement'
    ],
    interestRate: '2-3% per month',
    maxAmount: 'UGX 50,000,000',
    repaymentPeriod: '6-36 months'
  },
  {
    id: 'business-loans-home',
    title: 'Business Loans',
    description: 'Grow your business with our tailored SME financing solutions and flexible terms.',
    shortDescription: 'Grow your business with our tailored SME financing solutions and flexible terms.',
    image: 'https://images.unsplash.com/photo-1758876202167-f81c995c3fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlJTIwd29ya2VyfGVufDF8fHx8MTc2OTE3OTE1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Up to UGX 200M', 'Business support', 'Flexible terms', 'Low rates'],
    detailedFeatures: [
      'Tailored business advice and support',
      'Asset financing for machinery and vehicles',
      'Working capital for inventory management',
      'Group lending for market vendors',
      'Flexible payment schedules',
      'Business planning assistance'
    ],
    eligibility: [
      'Registered business entity',
      '2+ years in operation',
      'Demonstrated business revenue',
      'Valid business license'
    ],
    applicationProcess: [
      'Business profile submission',
      'Financial documents review',
      'Business assessment',
      'Loan approval and disbursement'
    ],
    interestRate: '1.5-2.5% per month',
    maxAmount: 'UGX 200,000,000',
    repaymentPeriod: '12-60 months'
  },
  {
    id: 'salary-loans-home',
    title: 'Salary Loans',
    description: 'Loans designed for salaried employees with competitive rates and instant processing.',
    shortDescription: 'Loans designed for salaried employees with competitive rates and instant processing.',
    image: 'https://images.unsplash.com/photo-1651449815993-706eaa7a936a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc2hvcCUyMG93bmVyfGVufDF8fHx8MTc2OTE3OTE1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Instant approval', 'No collateral', 'Direct salary deduction', 'Up to UGX 30M'],
    detailedFeatures: [
      'Instant approval process',
      'No collateral required',
      'Direct salary deduction option',
      'Up to UGX 30M facility',
      'Same-day disbursement',
      'Employer verification only'
    ],
    eligibility: [
      'Permanent salaried employee',
      'Minimum 6 months employment',
      'Valid employee ID',
      'Monthly salary of UGX 500,000+'
    ],
    applicationProcess: [
      'Quick online application',
      'Employer verification',
      'Instant approval decision',
      'Same-day fund disbursement'
    ],
    interestRate: '1.5-2% per month',
    maxAmount: 'UGX 30,000,000',
    repaymentPeriod: '3-24 months'
  }
];