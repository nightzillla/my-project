import React from 'react'
import Javier from '../img/NFT/Javier.png'

function Bootcamp() {
  return (
    // <div>
    //   <h1>Bootcamp</h1>
    //   <img src={Javier}/>
    // </div>
    <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap 2xl:w-1/ lg:w-1/4 md:w-1/6 sm:w-1/6">
           {/* SIZE OF THE CARDS */}
            <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img src={Javier}/>
                </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                       
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
        </div>
        </div>
  )
}

export default Bootcamp