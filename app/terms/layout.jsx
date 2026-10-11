import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/terms',
  title: 'Terms of Use | TRANCE NEXUS',
  description: 'The terms that apply when using TRANCE NEXUS, including content use, external links and affiliate disclosures.',
});

export default function Layout({ children }) {
  return children;
}
