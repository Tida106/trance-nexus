import { hubMeta } from '@/lib/seo';

export const metadata = hubMeta({
  path: '/events',
  title: 'Trance Festivals & Events Calendar | TRANCE NEXUS',
  description: 'Upcoming trance festivals and events around the world, including A State of Trance, Dreamstate, Transmission and Luminosity Beach Festival, with dates.',
});

export default function Layout({ children }) {
  return children;
}
