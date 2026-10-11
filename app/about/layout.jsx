import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/about',
  title: 'About TRANCE NEXUS',
  description: 'About TRANCE NEXUS, an independent, fan-made trance music portal covering artists, labels, radio shows, festivals and the history of the genre.',
});

export default function Layout({ children }) {
  return children;
}
