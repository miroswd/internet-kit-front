import React from 'react';

import { Container, TitleVideo, Video } from './style'

export const CardVideo = ({ row: { id, title, url } }) => {
  return (
    <Container key={id}>
      <Video
        src={`${url.replace(/watch\?v=/, 'embed/')}?color=white&origin=https://web-survival.netlify.app"`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <a href={url} target='_blank' rel="noreferrer" >
        <TitleVideo>{title}</TitleVideo>
      </a>
    </Container>
  )
}