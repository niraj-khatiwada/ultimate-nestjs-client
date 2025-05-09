import {
  Image as NextUIImage,
  type ImageProps as NextUIImageProps,
} from '@heroui/react'
import React from 'react'

interface ImageProps {
  src: string
  alt: string
}
function Image(props: ImageProps & Exclude<NextUIImageProps, 'src'>) {
  const { ...nextImageProps } = props

  const [isFallbackImage, setIsFallbackImage] = React.useState(false)
  return (
    <NextUIImage
      onLoadedData={() => {
        setIsFallbackImage(false)
      }}
      onError={() => {
        setIsFallbackImage(true)
      }}
      {...nextImageProps}
      {...(isFallbackImage
        ? {
            src:
              nextImageProps?.fallbackSrc?.toString() ?? '/default-blurred.jpg',
            fallbackSrc: null,
          }
        : {})}
    />
  )
}

export default Image
