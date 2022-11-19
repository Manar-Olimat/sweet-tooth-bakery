import React from 'react'

const Gallary = () => {
  return (
    <section>

<h1 className="text-center font-bold py-10 text-3xl dark:text-white">Image Gallery With Grid</h1>

<div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
  <div className="grid grid-cols-4 grid-rows-2 grid-flow-col gap-2">
    <div className="w-full row-span-2">
      <img
        src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"/>
    </div>
    
    <div className="w-full col-span-2 ">
      <img
        src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full">
      <img
        src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full col-span-2">
      <img
        src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full ">
      <img
        src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
   
  </div>
</div>



        <div className="container mx-auto">
    <div className="grid grid-cols-4 grid-rows-4 p-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-1">
        <div className="w-full  rounded">
<div className="cat-img ">
    <img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
                alt="image"/>
</div>
            
                <h6 className='cat-name'>Name</h6>
        </div>
        <div className="w-full  rounded">
        <div className="cat-img">
    <img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
                alt="image"/>
</div>
                <h6 className='cat-name'>Name</h6>

        </div>
        <div className="w-full  rounded">
        <div className="cat-img">
    <img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
                alt="image"/>
</div>
                                <h6 className='cat-name'>Name</h6>

        </div>
        <div className="w-full  rounded">
        <div className="cat-img">
    <img src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-sweet-it.jpg?itok=IOyK92Fc"
                alt="image"/>
</div>
                                <h6 className='cat-name'>Name</h6>

        </div>
       
    </div>
</div>
    </section>
  )
}

export default Gallary