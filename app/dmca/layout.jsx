import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/dmca',
  title: 'DMCA & Copyright | TRANCE NEXUS',
  description: 'How to report copyright concerns about content on TRANCE NEXUS and how takedown requests are handled.',
});

export default function Layout({ children }) {
  return children;
}
