import type { StructureResolver } from 'sanity/structure'
import { SINGLETON_TYPES } from '../schemaTypes'

const SINGLETON_ITEMS: { id: string; title: string; type: string }[] = [
  { id: 'siteSettings', title: 'Site Settings', type: 'siteSettings' },
  { id: 'hero', title: 'Hero', type: 'hero' },
  { id: 'about', title: 'About', type: 'about' },
  { id: 'seo', title: 'SEO', type: 'seo' },
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site')
        .child(
          S.list()
            .title('Site')
            .items(
              SINGLETON_ITEMS.map((item) =>
                S.listItem()
                  .id(item.id)
                  .title(item.title)
                  .child(S.document().schemaType(item.type).documentId(item.id))
              )
            )
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() ?? '')
      ),
    ])
