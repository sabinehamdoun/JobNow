import React from 'react'

const Banner = ({title, subtitle, backImage}) => {
  return (
    <div className="min-h-full bg-[#00cc99] bg-fixed bg-center bg-no-repeat bg-cover text-center" id="home" style={{backgroundImage: `url(${backImage})`}}>
      <div className="text-[#fff] p-2 text-3xl w-full h-96 bg-black bg-opacity-70 flex flex-col justify-center items-center box-border mx-auto max-w-full">
        <h1 className="text-3xl m-0 px-5 sm:px-0">{title}</h1>
        <p className="text-base my-5">{subtitle}</p>
      </div>
    </div>
  )
}

export default Banner