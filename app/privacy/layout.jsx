import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/privacy',
  title: 'Privacy Policy | TRANCE NEXUS',
  description: 'How TRANCE NEXUS collects and uses data, including Google Analytics and Google AdSense cookies, and the choices available to visitors.',
});

export default function Layout({ children }) {
  return children;
}
