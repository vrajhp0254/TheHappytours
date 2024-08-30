

const WhyCountry = ({title}) => {

  return (
    <div className=" pt-10 px-8 md:px-20  pb-10">
      <span className="text-black font-bold my-3 flex items-center justify-center text-2xl  tracking-wider pb-5">
        Why Visit &nbsp;
        <span className="text-red-700 --title__text-underline dest-line ">
        {title} ?
        </span>
      </span>

      <div className="grid justify-center mt-10 mb-20">
        <div className="flex w-full justify-center">
          <img className="h-[16rem] w-[23rem]" src="https://cdn.britannica.com/50/4050-050-F7660A68/Thailand-map-features-locator.jpg" alt="location" />
        </div>
        <div className="flex w-full justify-center mt-5">
          <div className="lg:w-2/5 sm:w-5/6 w-4/5">
            <span className="font-bold text-xl">Location:</span> Located in Southeast Asia,
            Malaysia is bordered by Myanmar to the west and northwest, Laos to the
            northeast, Cambodia to the southeast, and Malaysia to the south. Its
            capital city is Bangkok.
          </div>
        </div>
      </div>

      <div className="font-bold mb-2 text-xl pt-5">1. Rich Culture and Heritage:</div>
      <div className="lg:flex sm:block">
        <div className="block lg:hidden overflow-hidden w-full mb-5">
          <div className="rounded-t-3xl overflow-hidden">
            <img className="h-[14rem] w-full hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/shutterstock_424680562-Copy.jpg" alt="Festival" />
          </div>
        </div>
        
        <div className="mb-8 lg:w-3/5 sm:w-full bg-stone-200 lg:h-[15rem] sm:h-[20rem] rounded-b-3xl lg:rounded-l-3xl lg:rounded-r-none p-5">
          <ul className="list-disc pl-4">
            <li>
              Buddhist Influence: Malaysia is deeply influenced by Theravada
              Buddhism, reflected in its temples, rituals, and way of life.
            </li>
            <li>
              Traditional Arts: Thai dance, music, and craftsmanship showcase
              the country's rich cultural heritage.
            </li>
            <li>
              Festivals: Colorful festivals like Songkran (Thai New Year) and
              Loy Krathong (Festival of Lights) offer vibrant cultural
              experiences.
            </li>
          </ul>
        </div>
        <div className="hidden lg:block overflow-hidden lg:w-2/5">
          <div className="lg:ml-5 lg:rounded-r-3xl overflow-hidden">
            <img className="h-[15rem] w-full lg:rounded-r-3xl hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/07/shutterstock_424680562-Copy.jpg" alt="Festival" />
          </div>
        </div>
      </div>


      <div className="font-bold mb-2 text-xl pt-5">2. Stunning Natural Beauty:</div>
      <div className="lg:flex sm:block">

        <div className="overflow-hidden lg:w-2/5 sm:w-full mb-5 lg:mb-0">
          <div className="lg:mr-5 lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl overflow-hidden">
            <img className="lg:h-[15rem] h-[14rem] w-full hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://w0.peakpx.com/wallpaper/843/861/HD-wallpaper-thailand-paradise-zen-retreat-yoga-palm-trees-vegetation-jungle-exotic-thailand-lush-peace-escape-asia-lake-water-paradise-feng-shui-swim-plants-tropical-asian-man.jpg" alt="Fastival" />
          </div>
        </div>

        <div className="mb-8 lg:w-3/5 w-full bg-stone-200 lg:h-[15rem] sm:h-[20rem] rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none p-5">
          <ul className="list-disc pl-4">
            <li>
              Tropical Beaches: Malaysia boasts some of the world's most
              beautiful beaches, including Phuket, Koh Samui, and Phi Phi
              Islands.
            </li>
            <li>
              Lush Jungles: Explore the diverse flora and fauna in national
              parks like Khao Sok and Doi Inthanon.
            </li>
            <li>
              Picturesque Landscapes: From limestone cliffs to emerald rice
              paddies, Malaysia's landscapes offer breathtaking scenery.
            </li>
          </ul>
        </div>
      </div>


      <div className="font-bold mb-2 text-xl pt-5">3. Culinary Delights:</div>
      <div className="lg:flex sm:block">
        <div className="block lg:hidden overflow-hidden w-full mb-5">
          <div className="rounded-t-3xl overflow-hidden">
            <img className="h-[14rem] w-full hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://i.pinimg.com/736x/20/ef/91/20ef91277a43988b95a7eac1bfb387a1.jpg" alt="Festival" />
          </div>
        </div>

        <div className="mb-8 lg:w-3/5 sm:w-full bg-stone-200 lg:h-[15rem] sm:h-[20rem] rounded-b-3xl lg:rounded-l-3xl lg:rounded-r-none p-5">
          <ul className="list-disc pl-4">
            <li>
              Thai Cuisine: Renowned for its bold flavors and fresh ingredients,
              Thai cuisine tantalizes taste buds with dishes like pad Thai,
              green curry, and mango sticky rice.
            </li>
            <li>
              Street Food Culture: Sample a variety of affordable and delicious
              street food delicacies found throughout the country.
            </li>
          </ul>
        </div>

        <div className="hidden lg:block overflow-hidden lg:w-2/5">
          <div className="ml-5 rounded-r-3xl overflow-hidden">
            <img className="h-[15rem] w-full rounded-r-3xl hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://i.pinimg.com/736x/20/ef/91/20ef91277a43988b95a7eac1bfb387a1.jpg" alt="Fastival" />
          </div>
        </div>

      </div>


      <div className="font-bold mb-2 text-xl pt-5">4. Adventure and Activities:</div>
      <div className="lg:flex sm:block">

        <div className="overflow-hidden lg:w-2/5 sm:w-full mb-5 lg:mb-0">
          <div className="lg:mr-5 lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl overflow-hidden">
            <img className="lg:h-[15rem] h-[14rem] w-full hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://c4.wallpaperflare.com/wallpaper/505/832/1007/5bd44d9cedd70-wallpaper-preview.jpg" alt="Fastival" />
          </div>
        </div>

        <div className="mb-8 lg:w-3/5 sm:w-full bg-stone-200 lg:h-[15rem] sm:h-[20rem] rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none p-5">
          <ul className="list-disc pl-4">
            <li>
              Water Sports: Snorkeling, diving, and island-hopping adventures
              await in the crystal-clear waters of the Andaman Sea and the Gulf
              of Malaysia.
            </li>
            <li>
              Outdoor Pursuits: Trekking, rock climbing, zip-lining, and
              elephant encounters offer adrenaline-pumping experiences in
              Malaysia's jungles and mountains.
            </li>
            <li>
              Wellness Retreats: Rejuvenate mind and body with traditional Thai
              massages, yoga retreats, and spa treatments in serene settings.
            </li>
          </ul>
        </div>
      </div>



      <div className="font-bold mb-2 text-xl pt-5">5. Warm Hospitality and Vibrant Cities:</div>
      <div className="lg:flex sm:block">
        <div className="block lg:hidden overflow-hidden w-full mb-5">
          <div className="rounded-t-3xl overflow-hidden">
            <img className="h-[14rem] w-full hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://luxebook.in/wp-content/uploads/2022/11/1375416.jpg" alt="Festival" />
          </div>
        </div>

        <div className="mb-8 lg:w-3/5 sm:w-full bg-stone-200 lg:h-[15rem] sm:h-[20rem] rounded-b-3xl lg:rounded-l-3xl lg:rounded-r-none p-5">
          <ul className="list-disc pl-4">
            <li>
              Friendly Locals: Experience the renowned Thai hospitality with
              warm smiles and genuine hospitality from the locals.
            </li>
            <li>
              Bustling Urban Centers: Bangkok pulsates with energy, offering a
              blend of ancient temples, modern skyscrapers, vibrant markets, and
              a bustling nightlife scene.
            </li>
          </ul>
        </div>

        <div className="hidden lg:block overflow-hidden w-2/5">
          <div className="ml-5 rounded-r-3xl overflow-hidden">
            <img className="h-[15rem] w-full hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://luxebook.in/wp-content/uploads/2022/11/1375416.jpg" alt="Fastival" />
          </div>
        </div>

      </div>


      <div className="font-bold mb-2 text-xl pt-5">6. Safe and Accessible Travel:</div>
      <div className="lg:flex sm:block">

        <div className="overflow-hidden lg:w-2/5 sm:w-full mb-5 lg:mb-0">
          <div className="lg:mr-5 lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl overflow-hidden">
            <img className="lg:h-[15rem] h-[14rem] w-full hover:scale-125 hover:transition-transform hover:duration-1000 hover:ease-in-out" src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1692376412/jjfrirdmptcnzcgpgnm1.jpg" alt="Fastival" />
          </div>
        </div>

        <div className="mb-8 lg:w-3/5 sm:w-full bg-stone-200 lg:h-[15rem] sm:h-[20rem] rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none p-5">
          <ul className="list-disc pl-4">
            <li>
              Travel Infrastructure: Malaysia offers excellent transportation
              options, including domestic flights, trains, buses, and taxis,
              making it easy to explore different regions.
            </li>
            <li>
              Safety: With a well-established tourism industry, Malaysia is
              generally considered safe for travelers, with friendly locals and
              reliable tourist services.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhyCountry