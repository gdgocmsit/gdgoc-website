const ContactUs = ({ id }) => {
  return (
    <section id={id} className="flex pt-10 md:pt-20 bg-white md:justify-between md:h-[390px] pb-10 md:mb-0">
      <div className="left hidden  md:flex w-1/2 text-white   font-bebas-neue">
      <div>
      <div className="w-72">
      <p className="bg-[#EA4335] p-4 rotate-[11.37deg] rounded-3xl text-5xl">ASk any doubt</p>
      </div>
      <div>
      <p className="bg-[#4285F4] p-4 -rotate-[35.17deg] rounded-3xl translate-x-10  text-7xl translate-y-5">Have a question?</p>
      </div>
      <div>
        <p className="bg-[#EA4335] h-20 w-20 rounded-full absolute translate-x-56 translate-y-4"></p>
      </div>
      <div className="w-40 ">
      <p className="bg-[#2EB574] p-3 rounded-2xl translate-x-44 translate-y-[67px] text-3xl">Here to help</p>
      </div>
      <div>
      <p className=" bg-[#F4B603] w-14 h-14  p-5 rounded-full translate-x-[336px] translate-y-2  font-bold"></p>
      </div>
      <div>
      <p className="bg-[#EA4335] h-20 w-20 rounded-full absolute -translate-y-48 -translate-x-7"></p>
      </div>
      <div>
      <p className="bg-[#F4B603] h-20 w-20 rounded-full relative -translate-y-32"></p>
      </div>
      <div>
      <p className="bg-[#2EB574] h-12 w-12 rounded-full absolute -translate-y-60 translate-x-12"></p>
      </div>
      <div>
      <p className="bg-[#4285F4] h-12 w-12 rounded-full absolute -translate-y-36"></p>
      </div>

      </div>
      </div>
      <div className="right gap-10 flex flex-col ml-7 mr-7 w-full md:items-center  ">
        <h1 className="font-bebas-neue uppercase text-5xl md:hidden">contact us</h1>
      <input type="text" placeholder="Full Name" className="border-b-[1px] focus:outline-none  md:w-[500px] pr-20 focus:border-[#666666] focus:border-b-2 transition-colors  border-[#858585] p-1 "/>
      <input type="text" placeholder="Email" className="border-b-[1px] focus:outline-none  md:w-[500px] pr-20 focus:border-[#666666] focus:border-b-2 transition-colors  border-[#858585] p-1 "/>
      <input type="text" placeholder="Message" className="border-b-[1px] focus:outline-none md:w-[500px] pr-20 focus:border-[#666666] focus:border-b-2 transition-colors  border-[#858585] p-1 "/>
      <div className="flex justify-start md:justify-start md:mb-5">
          <button className="p-2 bg-[#2EB574] hover:bg-green-600  text-white rounded-xl">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
