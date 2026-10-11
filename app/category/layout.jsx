import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/category',
  title: 'Blog Categories | TRANCE NEXUS',
  description: 'Browse TRANCE NEXUS articles by category: history, subgenres, artists, labels, events, production, monthly charts and all-time best lists.',
});

export default function Layout({ children }) {
  return children;
}
