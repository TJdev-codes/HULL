import React from 'react'

import BlockContent from '@components/block-content'


const TextImageCta = ({ data = {} }) => {
  const { heading, tagline, exerpt, image, cta } = data

  return (
    <section className="relative text-pink">
      <div className="p-10 container mx-auto relative">
        <div className="rounded-lg shadow-2xl lg:flex block p-20">
          <div className="">
            <img
              src={image}
            />
          </div>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="text-4xl mb-4 font-bold">
              <span className="">{heading}</span>
            </h1>
            {/* <button className="btn is-primary w-1/2"><a href={cta.url} target="_blank" className="text-3xl">{cta.linkText}</a></button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextImageCta