import React from 'react'

function Circle() {
  return (
    <div
        className="absolute -z-10 top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rounded-b-[1200px] rounded-tl-[0] rounded-tr-[0]"
        style={{
            background: 'radial-gradient(50% 100% at 50% 0%, #7839EE 0%, rgba(120, 57, 238, 0.00) 100%)'
        }}
    ></div>
  )
}

export default Circle