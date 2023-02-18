

const Services = ()=>{
    return (
        <div className="md:grid md:grid-cols-2 md:gap-3">
            <div className=" mx-auto ">
                <h2 className=" font-bold text-[#A1B57D] text-2xl text-center py-3">Background</h2>
                <p className="dark:text-white py-2 text-center text-gray-600">I recently graduated from <span className="text-black dark:text-gray-600 font-bold">Lagos City Polytechnic</span> after completing my degree in Accounting.</p>
                <p className="dark:text-white py-2 text-center text-gray-600">As a web developer, I enjoy bridging the gap between Acccounting, design and web app - combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experience.</p>
                <p className="dark:text-white py-2 text-center text-gray-600"><span className="text-black dark:text-gray-600 font-bold">When I'm not in front of a computer screen.</span> I'm Probably reading books, drawing or playing games.</p>
                <div className="text-center py-3"><a href="https://drive.google.com/file/d/1qe0wixQ_hxYPQ44M5uRrvMqr0kWeMuoP/view?usp=sharing" target="_blank" rel="noreferrer"className="py-2 font-bold dark:text-[#B33030]">View my Resume <i className="fas fa-arrow-right"></i></a></div>
            </div>
            <div>
            <h2 className="font-bold text-[#A1B57D] text-2xl text-center py-3">Skills</h2>
                <div className="dark:text-white grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <i className="text-xl fab fa-html5"></i>
                        <h3 className="text-gray-600">Html5</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <i className="text-xl fab fa-css3-alt"></i>
                        <h3 className="text-gray-600">Css3</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <i className="text-xl fab fa-sass"></i>
                        <h3 className="text-gray-600">Sass</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <i className="text-xl fab fa-js-square"></i>
                        <h3 className="text-gray-600">JavaScript</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <i className="text-xl fab fa-github"></i>
                        <h3 className="text-gray-600">Github</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <i className="text-xl fab fa-react"></i>
                        <h3 className="text-gray-600">React.js</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <i className="text-xl fas fa-cogs"></i>
                        <h3 className="text-gray-600">RESTful API</h3>
                    </div>
                    <div className="flex flex-col items-center">
                    <i className="text-xl fas fa-terminal"></i>
                        <h3 className="text-gray-600">Command Line</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services