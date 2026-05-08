import { posts as posts1 } from './posts';
import { posts2 } from './posts2';
import { posts3 } from './posts3';
import { posts4 } from './posts4';
import { posts5 } from './posts5';
import { posts6 } from './posts6';
import { posts7 } from './posts7';
import { posts8 } from './posts8';
import { posts9 } from './posts9';
import { posts10 } from './posts10';
import { posts11 } from './posts11';
import { posts12 } from './posts12';
import { posts13 } from './posts13';

export const posts = [...posts1, ...posts2, ...posts3, ...posts4, ...posts5, ...posts6, ...posts7, ...posts8, ...posts9, ...posts10, ...posts11, ...posts12, ...posts13];
export const slugs = posts.map(p => p.slug);
