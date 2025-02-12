import { Link } from 'react-router-dom'
import furniture from '../assets/hero3.webp'

const About = () => {
  return (
    <section className="px-8 py-20 tracking-tight  ">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <h1 className="text-5xl font-bold sm:text-6xl tracking-tight ">
          Elevate Your Living Space with Elegance
        </h1>
        <p className="text-lg sm:text-xl tracking-tight  max-w-3xl mx-auto leading-relaxed ">
          At <span className="font-semibold ">HomeCrest</span>, we are more than
          just a furniture brand – we create experiences. Our curated collection
          of premium furniture blends timeless design with modern functionality,
          transforming every room into a masterpiece of sophistication and
          warmth.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center mt-6">
          <Link
            to="/products"
            className="btn btn-primary bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
          >
            Explore Our Collections
          </Link>
        </div>
      </div>

      {/* About Section with Image */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-24 flex gap-3 flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <img
            src={furniture}
            alt="Furniture"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-semibold ">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            HomeCrest was founded with a single mission – to transform spaces
            and elevate lifestyles with unique and thoughtfully crafted
            furniture. We believe that the right furniture can not only enhance
            the beauty of your home but also make every moment you spend there
            more comfortable.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto mt-20 sm:mt-24 text-center space-y-8">
        <h2 className="text-3xl font-semibold">Our Story</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          Founded in 2015, HomeCrest began as a small family-owned furniture
          workshop. Over the years, we’ve grown into a trusted name in the
          furniture industry, offering handcrafted designs that suit every home.
          Our commitment to quality and craftsmanship has made us a go-to
          destination for customers looking for stylish yet durable furniture.
        </p>
      </div>

      {/* Our Values */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-24 text-center space-y-8">
        <h2 className="text-3xl font-semibold  ">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold ">Sustainability</h3>
            <p className="text-lg  ">
              We use eco-friendly materials and sustainable production processes
              to reduce our environmental impact.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Craftsmanship</h3>
            <p className="text-lg  ">
              Each piece of furniture is crafted with attention to detail,
              ensuring the highest standards of quality.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold  ">Customer Satisfaction</h3>
            <p className="text-lg">
              Our goal is to provide an exceptional experience, from browsing to
              delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-6xl mx-auto mt-20 sm:mt-24 text-center space-y-8">
        <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className=" p-8 rounded-lg shadow-lg w-80  ">
            <p className="text-lg   mb-4">
              "I’ve never been more pleased with a furniture purchase. The
              design is timeless, and the quality is exceptional. Highly
              recommend!"
            </p>
            <p className="font-semibold">– Sarah L.</p>
          </div>
          <div className=" p-8 rounded-lg shadow-lg w-80 ">
            <p className="text-lg  mb-4">
              "HomeCrest transformed my living room. The furniture is elegant,
              comfortable, and durable. I couldn’t be happier with my choice."
            </p>
            <p className="font-semibold  ">– John D.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto mt-20 p-10  shadow-lg rounded-xl  ">
        <h2 className="text-4xl font-bold   text-center mb-6">Get in Touch</h2>
        <p className="text-lg  text-center max-w-2xl mx-auto mb-10">
          We are here to assist you. Whether you have questions, need support,
          or are interested in business collaborations, don't hesitate to reach
          out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold ">📍 Head Office</h3>
            <p className="text-lg ">Gulshan Avenue, Dhaka, Bangladesh</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold ">📞 Call Us</h3>
            <p className="text-lg ">+880 1601861999</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">✉️ Email</h3>
            <p className="text-lg ">mehedihasan.dev01@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
