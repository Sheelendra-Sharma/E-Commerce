
function Footer() {
  return (
    <div className="container border-t border-gray-300 mt-16">
    <div className="">
      <h1 className="font-extrabold px-6 py-3">Contact Us</h1>
      <div className="grid space-y-4">
        <input
            name="from_name"
          className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] "
          type="Name"
          placeholder="Name"
        />
        <input
          name="from_email"
          className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] "
          type="Email"
          placeholder="Email!"
        />
        <input
          name = "message"
          className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] h-[100px] align-text-top"
          type="Message"
          placeholder="Message"
        />

         <button 
          value="Send"
          type="submit" 
           className="rounded-full border border-double bg-accent hover:bg-slate-500 px-6 py-3 font-medium text-white">
          Send
          </button>
      </div>
      <div className="container text-center text-gray-500 py-4">
        &copy; Copyright @The Sachin Sharma 2023.
      </div>
    </div>
  </div>
  )
}

export default Footer