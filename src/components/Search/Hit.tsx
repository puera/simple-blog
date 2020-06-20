import React from 'react';

import PostItem from '../PostItem';

interface HitProps {
  hit: {
    fields: {
      slug: string;
    };
    title: string;
    date: string;
    description: string;
    category: string;
    background?: string;
  };
}

const Hit: React.FC<HitProps> = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    date={hit.date}
    background={hit.background}
    description={hit.description}
    category={hit.category}
  />
);

export default Hit;
