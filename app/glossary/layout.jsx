import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/glossary',
  title: 'Trance Music Glossary | TRANCE NEXUS',
  description: 'Plain-English definitions of trance music and DJ terms, from breakdown and buildup to beatmatching and ASOT.',
});

export default function Layout({ children }) {
  return children;
}
