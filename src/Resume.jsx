import ResumePic from "./assets/ResumePic.png";
import DownloadButton from "./DownloadButton";
 
function Resume() {
    return (
        <section className="flex md:flex-row flex-col justify-center bg-secondary p-2" id="resume">
      <div className="md:w-1/2 w-auto m-0 flex justify-end">
        <img src={ResumePic} alt="About me" className="rounded-4xl mt-8 md:h-[500px] h-auto md:ml-15 md:mb-5 p-5 w-[500px]" />
      </div>

      <div className="flex md:w-1/2 mt-8 justify-center ">
      <div className="flex flex-col justify-center px-5">
        <h1 className="text-6xl font-bold mb-4 font-Bebas text-white  border-b-4 border-[#5551e3] w-[160px]">
         Resume
        </h1>

        <p className="text-white font-bold leading-relaxed  font-Gruppo text-2xl md:p-2 ">
           You can download my resume  
        </p>
        <DownloadButton/>
      </div>
        
      </div>
    </section>
    );
}
export default Resume;