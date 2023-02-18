import Image from "../image/1634304304833.jfif"

const Hero = ()=>{
    return(
        <div className="text-center py-20">
            <h1 className="dark:text-[#B33030] text-[2.5rem] text-[#A1B57D] font-bold">Osuya Richard</h1>
            <h2 className="dark:text-white">FrontEnd Developer and Designer.</h2>
            <p className="dark:text-white w-[50%] mx-auto my-5 leading-6 text-gray-600">Highly effective at developing and standardizing designs according 
                to company brand and objectives. Ready to bring my all to a 
                growth-oriented team.
            </p>
            <div className="flex justify-center gap-5 my-6 text-gray-600">
                <a className="dark:hover:text-white" href="https://www.linkedin.com/in/richard-osuya-7a3851223/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in text-[1.2rem]"></i></a>
                <a className="dark:hover:text-white" href="https://github.com/Rios-101" target="_blank" rel="noreferrer"><i className="fab fa-github text-[1.2rem]"></i></a>
                <a className="dark:hover:text-white" href="https://profile.indeed.com/?hl=en&co=NG&from=gnav-jobseeker-profile--profile-one-frontend" target="_blank" rel="noreferrer"><i className="fas fa-info text-[1.2rem]"></i></a>
            </div>
            <div className="relative ">
                <img className="mx-auto w-60 h-60 rounded-full mt-10" src={Image} alt="profile"/>
            </div>
        </div>
    )
}

export default Hero