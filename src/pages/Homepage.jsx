import HeroImage from "../assets/learn-coding-clipart-lg.png"
import AboutImage from "../assets/coding_4645244.png"
import project1 from "../assets/1.svg"
import project2 from "../assets/2.jpg"
import project3 from "../assets/3.jpg"
import project4 from "../assets/4.svg"
import project5 from "../assets/5.png"

const Homepage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32" id="home">
          <div className="box">
            <h1 className="text-5xl/tight font-medium mb-7">Belajar Membuat Website Dengan <span className="font-bold text-sky-400">Tailwind CSS</span></h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos recusandae ipsam cupiditate blanditiis repudiandae provident natus cum officiis placeat praesentium dolorem quasi, dolores voluptate sequi cumque porro. Deleniti, ipsam.</p>
            <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0" />
          </div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Imsge" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight font-medium mb-7">Belajar Membuat Website Dengan <span className="font-bold text-sky-400">Tailwind CSS</span></h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos recusandae ipsam cupiditate blanditiis repudiandae provident natus cum officiis placeat praesentium dolorem quasi, dolores voluptate sequi cumque porro. Deleniti, ipsam.</p>
          </div>
        </div>

        <div className="services" id="services">
          <h1 className="text-center lg:text-5xl/tight font-medium mb-2 mt-3">Layanan</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea ullam aliquid tempora reprehenderit aspernatur voluptates non nulla, iusto praesentium debitis voluptatum cumque eius</p>
        </div>
        <div className="service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="box bg-sky-400 rounded-lg shadow p-4 mt-3">
            <i className="ri-number-1 text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 1</h3>
            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita aut provident corrupti, temporibus laborum, nulla earum quibusdam, optio nisi dolorem deleniti consequuntur eos qui soluta cupiditate ullam</p>
          </div>
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-number-2 text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 2</h3>
            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita aut provident corrupti, temporibus laborum, nulla earum quibusdam, optio nisi dolorem deleniti consequuntur eos qui soluta cupiditate ullam</p>
          </div>
          <div className="box bg-sky-400 rounded-lg shadow p-4">
            <i className="ri-number-3 text-3xl text-white"></i>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 3</h3>
            <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita aut provident corrupti, temporibus laborum, nulla earum quibusdam, optio nisi dolorem deleniti consequuntur eos qui soluta cupiditate ullam</p>
          </div>
        </div>

        <div className="project" id="project">
          <h1 className="text-center lg:text-5xl/tight font-medium mb-2 mt-5">Proyek</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea ullam aliquid tempora reprehenderit aspernatur voluptates non nulla, iusto praesentium debitis voluptatum cumque eius</p>
          <div className="project-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img src={project1} alt="project" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident quae? Non, incidunt adipisci. Nisi, saepe. Aliquid minima asperiores fugiat, saepe consequuntur, rerum iste facere</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={project2} alt="project" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident quae? Non, incidunt adipisci. Nisi, saepe. Aliquid minima asperiores fugiat, saepe consequuntur, rerum iste facere</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={project3} alt="project" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident quae? Non, incidunt adipisci. Nisi, saepe. Aliquid minima asperiores fugiat, saepe consequuntur, rerum iste facere</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={project4} alt="project" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident quae? Non, incidunt adipisci. Nisi, saepe. Aliquid minima asperiores fugiat, saepe consequuntur, rerum iste facere</p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={project5} alt="project" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
              <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident quae? Non, incidunt adipisci. Nisi, saepe. Aliquid minima asperiores fugiat, saepe consequuntur, rerum iste facere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
