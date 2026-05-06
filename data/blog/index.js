import { posts as posts1 } from './posts';
import { posts2 } from './posts2';
import { posts3 } from './posts3';
import { posts4 } from './posts4';
import { posts5 } from './posts5';
import { posts6 } from './posts6';
import { posts7 } from './posts7';

export const posts = [...posts1, ...posts2, ...posts3, ...posts4, ...posts5, ...posts6, ...posts7];
export const slugs = posts.map(p => p.slug);
