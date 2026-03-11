import fs from 'node:fs';
import yaml from 'js-yaml';
import { join } from 'node:path';

const dataDir = join(process.cwd(), 'src', 'data');

export interface Artist {
  slug: string;
  name: string;
  tag: string;
  photo: string;
  order: number;
  bio: string;
  links?: {
    instagram?: string;
    appleMusic?: string;
    spotify?: string;
    website?: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  artist: string;
  cover: string;
  type: string;
  year: number;
  releaseDate?: string;
  published: boolean;
  order: number;
  credits?: string;
}

export interface LiveEvent {
  slug: string;
  date: string;
  event: string;
  venue?: string;
  city?: string;
  ticketUrl?: string;
  order: number;
}

function load<T>(file: string): T[] {
  const raw = fs.readFileSync(join(dataDir, file), 'utf-8');
  return (yaml.load(raw) as T[]) || [];
}

export const getArtists = (): Artist[] =>
  load<Artist>('artists.yaml').sort((a, b) => a.order - b.order);

export const getArtistBySlug = (slug: string): Artist | undefined =>
  load<Artist>('artists.yaml').find((a) => a.slug === slug);

export const getProjects = (): Project[] =>
  load<Project>('projects.yaml').sort((a, b) => a.order - b.order);

export const getLiveEvents = (): LiveEvent[] =>
  load<LiveEvent>('live.yaml').sort((a, b) => a.order - b.order);
