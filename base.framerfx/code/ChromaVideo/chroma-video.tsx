import React, { useRef, useState, useEffect } from 'react'
import { ControlType } from 'framer'

export const ChromaVideo = ({
  videoSrcFile,
  videoSrcUrl,
  videoSrc,
  width,
  height,
  red,
  green,
  blue
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const c1Ref = useRef<HTMLCanvasElement>(null)
  const c2Ref = useRef<HTMLCanvasElement>(null)
  const framerComponentWidth = width
  const framerComponentHeight = height

  const [canvasContexts, setCanvasContexts] = useState({
    c1Ctx: null,
    c2Ctx: null
  })

  useEffect(() => {
    if (videoRef && videoRef.current) {
      const eventPlayListener = () => {
        if (canvasContexts.c1Ctx === null && canvasContexts.c2Ctx === null) {
          setCanvasContexts({
            c1Ctx: c1Ref.current.getContext('2d'),
            c2Ctx: c2Ref.current.getContext('2d')
          })
        } else {
          videoTimerCallback()
        }
      }

      videoRef.current.addEventListener('play', eventPlayListener)

      return () =>
        videoRef.current.removeEventListener('play', eventPlayListener)
    }
  })

  useEffect(() => {
    videoTimerCallback()
  }, [canvasContexts.c1Ctx, canvasContexts.c2Ctx])

  const videoTimerCallback = () => {
    if (videoRef && videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) return
      videoComputeFrame()
      setTimeout(() => videoTimerCallback(), 0)
    }
  }

  const videoComputeFrame = () => {
    if (canvasContexts && canvasContexts.c1Ctx) {
      canvasContexts.c1Ctx.drawImage(
        videoRef.current,
        0,
        0,
        framerComponentWidth,
        framerComponentHeight
      )
      const frame = canvasContexts.c1Ctx.getImageData(
        0,
        0,
        framerComponentWidth,
        framerComponentHeight
      )
      const l = frame.data.length / 4

      for (let i = 0; i < l; i++) {
        const r = frame.data[i * 4 + 0]
        const g = frame.data[i * 4 + 1]
        const b = frame.data[i * 4 + 2]
        // if (g > 100 && r < 40) frame.data[i * 4 + 3] = 0
        if (g > green && r < red) frame.data[i * 4 + 3] = 0
      }

      canvasContexts.c2Ctx.putImageData(frame, 0, 0)
      return
    }
  }

  return (
    <main
      style={{ width: framerComponentWidth, height: framerComponentHeight }}
    >
      <video /* eslint-disable-line jsx-a11y/media-has-caption */
        style={styleVideo}
        ref={videoRef}
        autoPlay
        muted
        loop
        crossOrigin="anonymous"
      >
        <source src={videoSrc ? videoSrcFile : videoSrcUrl} type="video/mp4" />
      </video>
      <canvas
        ref={c1Ref}
        width={framerComponentWidth}
        height={framerComponentHeight}
        style={styleC1}
      ></canvas>
      <canvas
        ref={c2Ref}
        width={framerComponentWidth}
        height={framerComponentHeight}
      ></canvas>
    </main>
  )
}

const styleVideo: React.CSSProperties = {
  display: 'none',
  width: '100%'
}

const styleC1: React.CSSProperties = {
  display: 'none'
}

const defaultProps = {
  videoSrcFile: '',
  videoSrcUrl: '',
  videoSrc: true
}

const rgbDefaults = {
  type: ControlType.Number,
  min: 0,
  max: 255,
  step: 1
}

const propertyControls = {
  videoSrc: {
    type: ControlType.Boolean,
    title: 'MP4 Src',
    enabledTitle: 'File',
    disabledTitle: 'Url'
  },
  videoSrcFile: {
    title: ' ',
    type: ControlType.File,
    allowedFileTypes: ['mp4'],
    hidden: props => props.videoSrc === false
  },
  videoSrcUrl: {
    title: ' ',
    type: ControlType.String,
    hidden: props => props.videoSrc === true
  },
  red: {
    ...rgbDefaults,
    title: 'Red'
  },
  green: {
    ...rgbDefaults,
    title: 'Green'
  },
  blue: {
    ...rgbDefaults,
    title: 'Blue'
  }
}

ChromaVideo.defaultProps = defaultProps
ChromaVideo.propertyControls = propertyControls
