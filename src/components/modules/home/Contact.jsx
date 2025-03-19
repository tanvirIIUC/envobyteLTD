import ContactForm from "../../ui/ContactForm";
import linkedInIcon from '../../../assets/linkedInIcon.png';
import whatsappIcon from '../../../assets/whatsappIcon.png';
import bussinessIcon from '../../../assets/bussinessIcon.png';
const Contact = () => {
  return <div className="bg-[#001243] py-20">
    <div className="lg:flex gap-5 justify-center">
      <ContactForm />
      <div className="w-[350px] text-white mt-10 lg:mt-0 p-2">
        <h1 className="text-5xl font-extrabold">Let us know what you think!</h1>
        <p className="text-sm text-gray-300 mt-2">
          Got something on your mind? Share it with us! Drop a message, and we'll respond quickly to assist you.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
          <p className="">
              <img src={bussinessIcon} alt="icon" />
            </p>

            <div>
              <p className="text-sm text-gray-300">Business:</p>
              <a href="mailto:support@envobyte.com" className="text-white text-[16px] font-semibold hover:underline">
                support@envobyte.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
          <p className="">
              <img src={whatsappIcon} alt="icon" />
            </p>


            <div>
              <p className="text-sm text-gray-300">WhatsApp:</p>
              <a href="https://wa.me/16677772477" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] font-semibold hover:underline">
                +1 (667) 777 2477
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
           
            <p className="">
              <img src={linkedInIcon} alt="icon" />
            </p>

            <div>
              <p className="text-sm text-gray-300">LinkedIn:</p>
              <a href="https://www.linkedin.com/company/envobyte" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] font-semibold hover:underline">
                www.linkedin.com/company/envobyte
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>;
};
export default Contact;