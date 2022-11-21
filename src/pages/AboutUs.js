import React from 'react'
import styles from './AllRecipes.module.css';

const AboutUs = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
       <div className={styles.bg_header}>
      <h2 className={styles.home_header}>About Us </h2>
      
         
      </div>
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src="https://centralca.cdn-anvilcms.net/media/images/2022/07/12/images/Baking_tips_pix.max-1200x675.jpg" alt="dashboard image"/>
        {/* <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sweet Tooth Bakery</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Sweet Tooth Bakery  is the trusted destination for bakers of all levels to learn, be inspired, and share their enthusiasm for baking with those they love. Home to the best recipes, content, tips and tools; we bring baking to life in everything we do, so you can do the same in your own home.

            </p>
            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
       
    <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Us?</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Our recipes are scrumptious, and like all good things in life are best enjoyed as part of a balanced lifestyle. With that in mind, we create alternative recipe options to suit your needs including; reduced sugar, no-nuts, gluten-free and many more. Have a peek at those recipes here.</p>
            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    
        <img class="w-full dark:hidden" src="https://imageio.forbes.com/specials-images/imageserve/932635636/Woman-preparing-muffins-at-home/960x0.jpg?format=jpg&width=960" alt="dashboard image"/>
        {/* <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}
       </div> 
</section>
  )
}

export default AboutUs