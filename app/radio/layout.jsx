import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/radio',
  title: 'Trance Radio Shows | TRANCE NEXUS',
  description: 'A guide to weekly trance radio shows, including A State of Trance, Group Therapy and Future Sound of Egypt, with schedules and official links.',
});

export default function Layout({ children }) {
  return children;
}
