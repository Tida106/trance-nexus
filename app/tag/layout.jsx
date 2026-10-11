import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/tag',
  title: 'Blog Tags | TRANCE NEXUS',
  description: 'Browse TRANCE NEXUS trance articles by tag, including subgenres, artists, places, tools and eras.',
});

export default function Layout({ children }) {
  return children;
}
