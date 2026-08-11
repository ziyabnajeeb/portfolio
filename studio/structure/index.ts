import type { StructureResolver } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { SINGLETON_TYPES } from '../schemaTypes'

const SINGLETON_ITEMS: { id: string; title: string; type: string }[] = [
  { id: 'siteSettings', title: 'Site Settings', type: 'siteSettings' },
  { id: 'hero', title: 'Hero', type: 'hero' },
  { id: 'about', title: 'About', type: 'about' },
  { id: 'seo', title: 'SEO', type: 'seo' },
]

const ORDERABLE_TYPES = new Set(['experience', 'education', 'project', 'skillCategory', 'skill'])

export const structure: StructureResolver = (S, context) =>
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
      orderableDocumentListDeskItem({ type: 'experience', title: 'Experience', S, context }),
      orderableDocumentListDeskItem({ type: 'education', title: 'Education', S, context }),
      orderableDocumentListDeskItem({ type: 'project', title: 'Projects', S, context }),
      orderableDocumentListDeskItem({ type: 'skillCategory', title: 'Skill Categories', S, context }),
      orderableDocumentListDeskItem({ type: 'skill', title: 'Skills', S, context }),
      ...S.documentTypeListItems().filter(
        (item) =>
          !SINGLETON_TYPES.has(item.getId() ?? '') && !ORDERABLE_TYPES.has(item.getId() ?? '')
      ),
    ])
