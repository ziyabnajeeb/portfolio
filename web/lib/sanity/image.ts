import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { apiVersion, dataset, projectId } from './env';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function resolveImage(image: { asset?: { _ref?: string } } | null | undefined, width = 800) {
  if (!image?.asset?._ref) return null;
  return urlFor(image).width(width).auto('format').url();
}