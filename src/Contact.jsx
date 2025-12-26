function Contact () {
    const config = {
        email:"sudeshkar008sk@gmail.com",
        phone:"+94 774356751"
    };

    return(
       <section className="flex flex-col justify-center bg-primary px-5 py-32 text-white" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold mb-4 font-Beba border-b-4 border-[#2b2D77] w-[220px]">
                Contact
            </h1>

            <p className="font-bold leading-relaxed font-Beba text-2xl md:p-2 p-5">
                If you want to discuss more in detail please reach out to me.
            </p>

            <p className="py-2">
                <span className="font-bold font-Beba text-black mr-1 ">Email:</span>
                <a 
                    href={`mailto:${config.email}`} 
                    className="no-underline hover:text-yellow-600 transition  "
                >
                    {config.email}
                </a>
            </p>

            <p className="py-2">
                <span className="font-bold font-Beba text-black mr-1">Phone:</span>
                <a 
                    href={`tel:${config.phone.replace(/\s/g, '')}`} 
                    className="no-underline hover:text-yellow-600 transition"
                >
                    {config.phone}
                </a>
            </p>
        </div>
       </section>
    );
}

export default Contact;
