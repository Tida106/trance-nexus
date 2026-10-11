import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/artists',
  title: 'Trance Artist Directory | TRANCE NEXUS',
  description: "Profiles of trance DJs and producers, from pioneers such as Paul van Dyk and Ferry Corsten to today's mainstage acts, with short bios and official links.",
});

export default function Layout({ children }) {
  return children;
}
