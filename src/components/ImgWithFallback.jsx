import React, { useState } from 'react'

/**
 * Renders <img> with a styled placeholder fallback if src is empty or fails.
 */
export default function ImgWithFallback({ src, alt = '', className = '', style = {}, placeholderLabel }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#1a1a2e] border border-white/10 ${className}`}
        style={style}
      >
        <svg className="w-9 h-9 text-white/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-white/25 text-[11px] text-center px-3 leading-tight">{placeholderLabel || alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  )
}
