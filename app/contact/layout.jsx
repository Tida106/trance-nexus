import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/contact',
  title: 'Contact | TRANCE NEXUS',
  description: 'Contact TRANCE NEXUS with corrections, questions or other enquiries about the site and its trance music coverage.',
});

export default function Layout({ children }) {
  return children;
}
