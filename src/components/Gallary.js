import React from 'react'

const Gallary = () => {
  return (
    <section>



        <div className="container mx-auto">
    <div className="grid grid-cols-4 grid-rows-1 p-20 space-y-2 gallery lg:space-y-0 lg:grid lg:gap-3 ">
        <div className="w-full  rounded">
<div className="cat-img ">
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F11%2F24%2Fginger-molasses-cookies.jpg&w=500&h=335&c=sc&poi=%5B1020%2C960%5D&q=60&rect=0%2C333%2C2000%2C1667"
                alt="image"/>
</div>
            
                <h6 className='cat-name'>Cookies</h6>
        </div>
        <div className="w-full  rounded">
        <div className="cat-img">
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F06%2F30%2F8284830.jpg&w=500&h=335&c=sc&poi=face&q=60"
                alt="image"/>
</div>
                <h6 className='cat-name'>Cake</h6>

        </div>
        <div className="w-full  rounded">
        <div className="cat-img">
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F-0001%2F11%2F30%2F69093.jpg&w=500&h=335&c=sc&poi=face&q=60"
                alt="image"/>
</div>
                                <h6 className='cat-name'>Cupcake</h6>

        </div>
        <div className="w-full  rounded">
        <div className="cat-img">
    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F27052104%2F6343024.jpg&w=500&h=335&c=sc&poi=face&q=60"
                alt="image"/>
</div>
                                <h6 className='cat-name'>Cheesecake</h6>

        </div>
       
    </div>
</div>
    </section>
  )
}

export default Gallary