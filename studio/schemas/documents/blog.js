import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'Post',
  name: 'blog', // name is the id, which we use to reference this object in code
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Name',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Tag',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime', // datetime is a custom type in sanity
    },
    {
      title: 'Category',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText',
      description: 'Overview',
    },
    {
      title: 'activity Description',
      name: 'body',
      type: 'richText',
    },
  ],
  preview: {
    // customizing blog preview
    select: {
      // selecting which field I want to show on the preview, and preparing them (destructuring the props selected inside preview)
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, dd/MM/yyy')
          : '',
      };
    },
  },
};
