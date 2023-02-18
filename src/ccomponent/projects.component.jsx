import Git from "../image/git.png"
import Shop from "../image/shop.png"
import Movie from "../image/movie.png"
import Button from "./Button.component"
import Series from "../image/series.png"

const Projects = ()=>{

    return(
        <div>
            <h2 className="font-bold text-[#A1B57D] text-2xl text-center py-5">Projects</h2>
            <div className="md:grid md:grid-cols-2 md:gap-2">
                <div className="flex flex-col items-center text-center shadow-2xl">
                    <a href="https://seriesfinder.netlify.app/" target="_blank" rel="noreferrer"><h3 className="dark:text-[#B33030] font-bold pb-2">Series Finder</h3></a>
                    <a href="https://seriesfinder.netlify.app/" target="_blank" rel="noreferrer"><img className="mx-auto w-60 h-60 rounded " src={Series} alt="profile"/></a>
                    <p className="dark:text-white py-2 text-gray-600">A RESTful api web app built with React.js and Tailwind that fetches users series information and rating from Themoviedb.</p>
                    <div className="grid grid-cols-3 gap-3">
                    <Button value={'Tailwind'}/>
                    <Button value={'JavaScript'}/>
                    <Button value={'React.js'}/>
                    
                    <Button value={'React Reducers'}/>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center shadow-2xl">
                    <a href="https://dulcet-wisp-d2be0d.netlify.app/" target="_blank" rel="noreferrer"><h3 className="dark:text-[#B33030] font-bold pb-2">GitHub Finder</h3></a>
                    <a href="https://dulcet-wisp-d2be0d.netlify.app/" target="_blank" rel="noreferrer"><img className="mx-auto w-60 h-60 rounded " src={Git} alt="profile"/></a>
                    <p className="dark:text-white py-2 text-gray-600">A RESTful api web app built with React.js and Tailwind that fetches users information and repos from Github.</p>
                    <div className="grid grid-cols-3 gap-3">
                    <Button value={'Tailwind'}/>
                    <Button value={'JavaScript'}/>
                    <Button value={'React.js'}/>
                    <Button value={'React Router'}/>
                    <Button value={'React Reducers'}/>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 text-center shadow-2xl">
                    <a href="https://poetic-monstera-ac5335.netlify.app" target="_blank" rel="noreferrer"><h3 className="font-bold pb-2 dark:text-[#B33030]">Crown Shop</h3></a>
                    <a href="https://poetic-monstera-ac5335.netlify.app" target="_blank" rel="noreferrer"><img className="mx-auto w-60 h-60 rounded " src={Shop} alt="profile"/></a>
                    <p className="dark:text-white py-2 text-gray-600">An e-commerce store that showcase the ability to use react technologies like Redux, Firebase, etc</p>
                    <div className="grid grid-cols-3 gap-3">
                    <Button value={'JavaScript'}/>
                    <Button value={'React.js'}/>
                    <Button value={'React Router'}/>
                    <Button value={'React Reducers'}/>
                    <Button value={'Redux'}/>
                    <Button value={'FireBase'}/>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 text-center shadow-2xl">
                    <a href="https://papaya-stardust-fed277.netlify.app/" target="_blank" rel="noreferrer"><h3 className="font-bold pb-2 dark:text-[#B33030]">Movie Reviewer</h3></a>
                    <a href="https://papaya-stardust-fed277.netlify.app/" target="_blank" rel="noreferrer"><img className="mx-auto w-60 h-60 rounded " src={Movie} alt="profile"/></a>
                    <p className="dark:text-white py-2 text-gray-600">A Movie Review app for rating and reviewing movies</p>
                    <div className="grid grid-cols-3 gap-3">
                    <Button value={'Tailwind'}/>
                    <Button value={'JavaScript'}/>
                    <Button value={'React.js'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects