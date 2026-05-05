import { posts as posts1 } from './posts';
import { posts2 } from './posts2';
import { posts3 } from './posts3';
import { posts4 } from './posts4';

export const posts = [...posts1, ...posts2, ...posts3, ...posts4];
export const slugs = posts.map(p => p.slug);
