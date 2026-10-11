import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/cookies',
  title: 'Cookie Policy | TRANCE NEXUS',
  description: 'The cookies used on TRANCE NEXUS, what they do, and how to accept, decline or manage them in your browser.',
});

export default function Layout({ children }) {
  return children;
}
