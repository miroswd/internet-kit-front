import React from 'react'

import { Container, TitleVideo, Video } from './style'

export const CardVideo = ({ row: { id, title, url } }) => {
  console.log({
    veSePode: title
  })
  return (
    <Container key={id}>
      <Video
        src={`${url.replace(/watch\?v=/, 'embed/')}?color=white`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <TitleVideo>{title}</TitleVideo>
    </Container>
  )
}