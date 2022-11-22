import React from 'react'


function NFTcard({img, name, href}) {
  return (
    <>
    <div className="flex flex-wrap">
          <div className='card-nft'>
            <article className="main-header overflow-hidden rounded-lg shadow-lg">
                <div className="rounded-lg">
                <img className="NFT-img"src={img}/>
                </div>
              <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white border">
                  <h6 class="no-underline text-black strong">{name}</h6>
                  <a className="linkGithub"href={href}>Github</a>
              </header>
            </article>
          </div>
      </div>
    </>
  )
}

export default NFTcard