
const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>
          &copy; copyright by <span className="font-bold">Kemal Reza</span>
        </p>
        <div className="social-footer sm:gap-7 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-linkedin-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-github-fill text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
