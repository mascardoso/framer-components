import React, { useRef, useState, useEffect } from 'react'
import { ControlType } from 'framer'

export const ChromaVideo = ({
  videoSrcFile,
  videoSrcUrl,
  videoSrc,
  width,
  height,
  showOriginalVideo,
  colorPickerValue,
  offsetR,
  offsetG,
  offsetB
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const c1Ref = useRef<HTMLCanvasElement>(null)
  const c2Ref = useRef<HTMLCanvasElement>(null)
  const framerComponentWidth = width
  const framerComponentHeight = height
  const rgbMaxValue = 255

  const [playing, setPlaying] = useState(false)

  const rgbValues = colorPickerValue.replace(/^rgba?\(|\s+|\)$/g, '').split(',')

  const parsedRgbValues = {
    r: parseInt(rgbValues[0]),
    g: parseInt(rgbValues[1]),
    b: parseInt(rgbValues[2])
  }

  const extractSelectedRgbRanges = () => {
    return {
      r: getMinMaxRgbValue(parsedRgbValues.r, offsetR),
      g: getMinMaxRgbValue(parsedRgbValues.g, offsetG),
      b: getMinMaxRgbValue(parsedRgbValues.b, offsetB)
    }
  }

  const getMinMaxRgbValue = (value: number, offset: number) => {
    const delta = (rgbMaxValue * offset) / 100
    // if offset is 0 then its off
    return {
      min: offset === 0 ? value : Math.round(Math.max(value - delta, 0)),
      max:
        offset === 0 ? value : Math.round(Math.min(value + delta, rgbMaxValue))
    }
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

    c1Ctx.drawImage(
      videoRef.current,
      0,
      0,
      framerComponentWidth,
      framerComponentHeight
    )
    const frame = c1Ctx.getImageData(
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

      if (
        r >= rgbRanges.r.min &&
        r <= rgbRanges.r.max &&
        g >= rgbRanges.g.min &&
        g <= rgbRanges.g.max &&
        b >= rgbRanges.b.min &&
        b <= rgbRanges.b.max
      )
        frame.data[i * 4 + 3] = 0 // set alpha to 0 when there's a match
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
  }, [playing])

  return (
    <main
      style={{ width: framerComponentWidth, height: framerComponentHeight }}
    >
      <video /* eslint-disable-line jsx-a11y/media-has-caption */
        style={{ width: '100%', display: showOriginalVideo ? 'block' : 'none' }}
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

const styleC1: React.CSSProperties = {
  display: 'none'
}

const defaultProps = {
  videoSrcFile: '',
  videoSrcUrl: '',
  videoSrc: true
}

const rgbDefaultProps = {
  type: ControlType.Number,
  min: 0,
  max: 50,
  step: 1,
  unit: '%'
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
  showOriginalVideo: {
    type: ControlType.Boolean,
    title: 'Show Original',
    defaultValue: false,
    enabledTitle: 'Show',
    disabledTitle: 'Hide'
  },
  colorPickerValue: {
    title: 'Color Pick',
    type: ControlType.Color,
    defaultValue: '#719603'
  },
  offsetR: {
    ...rgbDefaultProps,
    title: 'Offset R'
  },
  offsetG: {
    ...rgbDefaultProps,
    title: 'Offset G'
  },
  offsetB: {
    ...rgbDefaultProps,
    title: 'Offset B'
  }
}

ChromaVideo.defaultProps = defaultProps
ChromaVideo.propertyControls = propertyControls
