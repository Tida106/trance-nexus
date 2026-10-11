import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/labels',
  title: 'Trance Record Labels | TRANCE NEXUS',
  description: 'Profiles of trance record labels such as Anjunabeats, FSOE and Black Hole Recordings, with their history, key artists and official links.',
});

export default function Layout({ children }) {
  return children;
}
