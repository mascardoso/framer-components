import React, { useRef, useState, useEffect } from 'react'
import { ControlType } from 'framer'

enum SrcType {
  Video = 'Video',
  Url = 'URL'
}

export const ChromaVideo = ({
  frVideoSrcFile,
  frVideoSrcUrl,
  frVideoSrc,
  frColorPickerValue,
  frOffsetR,
  frOffsetG,
  frOffsetB,
  width,
  height
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const c1Ref = useRef<HTMLCanvasElement>(null)
  const c2Ref = useRef<HTMLCanvasElement>(null)
  const rgbMaxValue = 255
  const frComponentWidth = width
  const frComponentHeight = height

  const [playing, setPlaying] = useState(false)

  const rgbValues = frColorPickerValue
    .replace(/^rgba?\(|\s+|\)$/g, '')
    .split(',')

  const parsedRgbValues = {
    r: parseInt(rgbValues[0]),
    g: parseInt(rgbValues[1]),
    b: parseInt(rgbValues[2])
  }

  const extractSelectedRgbRanges = () => {
    return {
      r: getMinMaxRgbValue(parsedRgbValues.r, frOffsetR),
      g: getMinMaxRgbValue(parsedRgbValues.g, frOffsetG),
      b: getMinMaxRgbValue(parsedRgbValues.b, frOffsetB)
    }
  }

  const getMinMaxRgbValue = (value: number, offset: number) => {
    const delta = (rgbMaxValue * offset) / 100
    // if offset is 0 then the offset is not in use
    return {
      min: offset === 0 ? value : Math.round(Math.max(value - delta, 0)),
      max:
        offset === 0 ? value : Math.round(Math.min(value + delta, rgbMaxValue))
    }
  }

  const getVideoContent = () => {
    return (
      <>
        <video /* eslint-disable-line jsx-a11y/media-has-caption */
          style={{ ...styleVideo }}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          src={frVideoSrc === SrcType.Url ? frVideoSrcUrl : frVideoSrcFile}
        />
        <canvas
          ref={c1Ref}
          width={frComponentWidth}
          height={frComponentHeight}
          style={styleC1}
        ></canvas>
        <canvas
          ref={c2Ref}
          width={frComponentWidth}
          height={frComponentHeight}
        ></canvas>
      </>
    )
  }

  const videoTimerCallback = () => {
    if (videoRef && videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) return
      videoComputeFrame()
      setTimeout(() => videoTimerCallback(), 0)
    }
  }

  const rgbRanges = extractSelectedRgbRanges()

  const videoComputeFrame = () => {
    const c1Ctx = c1Ref.current.getContext('2d')
    const c2Ctx = c2Ref.current.getContext('2d')

    c1Ctx.drawImage(videoRef.current, 0, 0, frComponentWidth, frComponentHeight)
    const frame = c1Ctx.getImageData(0, 0, frComponentWidth, frComponentHeight)
    const l = frame.data.length / 4

    for (let i = 0; i < l; i++) {
      const r = frame.data[i * 4 + 0]
      const g = frame.data[i * 4 + 1]
      const b = frame.data[i * 4 + 2]

      if (
        r >= rgbRanges.r.min &&
        r <= rgbRanges.r.max &&
        g >= rgbRanges.g.min &&
        g <= rgbRanges.g.max &&
        b >= rgbRanges.b.min &&
        b <= rgbRanges.b.max
      )
        frame.data[i * 4 + 3] = 0 // set alpha channel to 0
    }

    c2Ctx.putImageData(frame, 0, 0)
    return
  }

  useEffect(() => {
    if (videoRef && videoRef.current) {
      const eventPlayListener = () => {
        setPlaying(true)
      }

      const eventPauseListener = () => {
        setPlaying(false)
      }

      videoRef.current.addEventListener('play', eventPlayListener)
      videoRef.current.addEventListener('pause', eventPauseListener)

      return () => {
        videoRef.current.removeEventListener('play', eventPlayListener)
        videoRef.current.removeEventListener('pause', eventPauseListener)
      }
    }
  })

  useEffect(() => {
    videoTimerCallback()
  }, [playing, frVideoSrc, frOffsetR, frOffsetG, frOffsetB, frColorPickerValue])

  return (
    <main
      style={{
        ...styleMain,
        width: frComponentWidth,
        height: frComponentHeight
      }}
    >
      {getVideoContent()}
    </main>
  )
}

const styleC1: React.CSSProperties = {
  display: 'none'
}

const styleMain: React.CSSProperties = {
  position: 'relative'
}

const styleVideo: React.CSSProperties = {
  width: '100%',
  top: 0,
  left: 0,
  visibility: 'hidden',
  position: 'absolute'
}

const defaultProps = {
  frVideoSrcFile: '',
  frVideoSrcUrl: ''
}

const rgbDefaultProps = {
  type: ControlType.Number,
  min: 0,
  max: 50,
  step: 1,
  unit: '%'
}

const propertyControls = {
  frVideoSrc: {
    type: ControlType.SegmentedEnum,
    title: 'Source',
    options: [SrcType.Url, SrcType.Video]
  },
  frVideoSrcFile: {
    title: ' ',
    type: ControlType.File,
    allowedFileTypes: ['mp4'],
    hidden: props => props.frVideoSrc === SrcType.Url
  },
  frVideoSrcUrl: {
    type: ControlType.String,
    title: ' ',
    placeholder: '../file.mp4',
    hidden: props => props.frVideoSrc === SrcType.Video
  },
  frColorPickerValue: {
    title: 'Color Pick',
    type: ControlType.Color,
    defaultValue: '#719603'
  },
  frOffsetR: {
    ...rgbDefaultProps,
    title: 'Offset R'
  },
  frOffsetG: {
    ...rgbDefaultProps,
    title: 'Offset G'
  },
  frOffsetB: {
    ...rgbDefaultProps,
    title: 'Offset B'
  }
}

ChromaVideo.defaultProps = defaultProps
ChromaVideo.propertyControls = propertyControls
