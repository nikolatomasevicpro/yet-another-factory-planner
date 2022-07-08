import React from 'react';
import { Anchor, AnchorProps } from '@mantine/core';

const ExternalLink = (props: AnchorProps<any>) => {
  return <Anchor target='_blank' rel='noopener noreferrer' {...props} />;
};

export default ExternalLink;
