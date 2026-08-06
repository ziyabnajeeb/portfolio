import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes, SINGLETON_TYPES } from './schemaTypes';
import { structure } from './structure';

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ??
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!projectId) {
  throw new Error(
    'Missing SANITY_STUDIO_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID'
  );
}

const dataset =
  process.env.SANITY_STUDIO_DATASET ??
  process.env.NEXT_PUBLIC_SANITY_DATASET ??
  'production';

export default defineConfig({
  name: 'portfolio-studio',
  title: 'Portfolio Studio',
  projectId,
  dataset,
  basePath: '/studio',
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool()],
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((item) => !SINGLETON_TYPES.has(item.templateId));
      }
      return prev;
    },
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? prev.filter(({ action }) => action !== 'duplicate' && action !== 'delete')
        : prev,
  },
});