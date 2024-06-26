import Git from "../image/git.png";
import Shop from "../image/shop.png";
// import Movie from "../image/movie.png";
import Button from "./Button.component";
import Series from "../image/series.png";
import Listeners from "../image/listeners.png";
import Lendo from "../image/lendo.png";
import ABR from "../image/abr.png";
import Wokpa from "../image/wokpa.png";
import NaijaCP from "../image/NaijaCp.png";

const Projects = () => {
  return (
    <div>
      <h2 className="font-bold text-[#A1B57D] text-2xl text-center py-5">
        React Projects
      </h2>
      <div className="md:grid  md:grid-cols-2 md:gap-4">
        <div className="flex flex-col p-6 items-center text-center shadow-2xl">
          <a
            href="https://www.africabusinessradio.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="dark:text-[#B33030] font-bold pb-2">
              ABR
            </h3>
          </a>
          <a
            href="https://www.africabusinessradio.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-100 h-60 rounded "
              src={ABR}
              alt="ABR"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            This is an online radio station which broadcasts on a daily basis programs that feature information, news, current affairs and other topics for starting and settled business entrepreneurs in the country.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"Tailwind"} />
            <Button value={"Next.js"} />
            <Button value={"React Query"} />
            <Button value={"SEO"} />
            <Button value={"Animation"} />
          </div>
        </div>
        <div className="flex flex-col p-6 items-center text-center shadow-2xl">
          <a
            href="https://listener.wokpa.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="dark:text-[#B33030] font-bold pb-2">
              lendocredit
            </h3>
          </a>
          <a
            href="https://listener.wokpa.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-100 h-60 rounded "
              src={Lendo}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            A digital lending platform that is concerned about providing financial convenience in terms of loans with good interest to its new and returning customers.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"Tailwind"} />
            <Button value={"Next.js"} />
            <Button value={"React Query"} />
            <Button value={"SEO"} />
            <Button value={"Animation"} />
          </div>
        </div>
        <div className="flex flex-col p-6 items-center text-center shadow-2xl">
          <a
            href="https://listener.wokpa.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="dark:text-[#B33030] font-bold pb-2">
              Wokpa Listener
            </h3>
          </a>
          <a
            href="https://listener.wokpa.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-100 h-60 rounded "
              src={Listeners}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            Wokpa Listeners is the dedicated platform associated with Wokpa, offering users the opportunity to discover an array of podcasts. This platform not only allows users to enjoy diverse content but also enables them to show appreciation by tipping the podcasters for their valuable contributions.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"Tailwind"} />
            <Button value={"Next.js"} />
            <Button value={"React Query"} />
          </div>
        </div>
        <div className="flex flex-col p-6 items-center text-center shadow-2xl">
          <a
            href="https://wokpa.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="dark:text-[#B33030] font-bold pb-2">
              Wokpa
            </h3>
          </a>
          <a
            href="https://wokpa.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-100 h-60 rounded "
              src={Wokpa}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            Wokpa is the ultimate platform for podcasters in Africans who want to create, monetize, and grow their podcast business.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"Tailwind"} />
            <Button value={"Next.js"} />
            <Button value={"React Query"} />
          </div>
        </div>
        <div className="flex flex-col p-6 items-center text-center shadow-2xl">
          <a
            href="https://seriesfinder.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="dark:text-[#B33030] font-bold pb-2">
              Series Finder
            </h3>
          </a>
          <a
            href="https://seriesfinder.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-100 h-60 rounded "
              src={Series}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            A RESTful api web app built with React.js and Tailwind that fetches
            users series information and rating from Themoviedb.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"Tailwind"} />
            <Button value={"JavaScript"} />
            <Button value={"React.js"} />

            <Button value={"React Reducers"} />
          </div>
        </div>
        <div className="flex flex-col p-6 items-center py-3 text-center shadow-2xl">
          <a
            href="https://naijacp.com/shop?u=Naijacp"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="font-bold pb-2 dark:text-[#B33030]">Naija CP</h3>
          </a>
          <a
            href="https://naijacp.com/shop?u=Naijacp"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-100 h-60 rounded "
              src={NaijaCP}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            A Website for selling and buying Mobal games currency
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"Tailwind"} />
            <Button value={"JavaScript"} />
            <Button value={"React.js"} />
            <Button value={"PHP"} />
          </div>
        </div>
        <div className="flex flex-col p-6 items-center text-center shadow-2xl">
          <a
            href="https://rios-github-finder.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="dark:text-[#B33030] font-bold pb-2">
              GitHub Finder
            </h3>
          </a>
          <a
            href="https://rios-github-finder.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-100 h-60 rounded "
              src={Git}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            A RESTful api web app built with React.js and Tailwind that fetches
            users information and repos from Github.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"Tailwind"} />
            <Button value={"JavaScript"} />
            <Button value={"React.js"} />
            <Button value={"React Router"} />
            <Button value={"React Reducers"} />
          </div>
        </div>
        <div className="flex flex-col p-6 items-center py-3 text-center shadow-2xl">
          <a
            href="https://poetic-monstera-ac5335.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="font-bold pb-2 dark:text-[#B33030]">Crown Shop</h3>
          </a>
          <a
            href="https://poetic-monstera-ac5335.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-100 h-60 rounded "
              src={Shop}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            An e-commerce store that showcase the ability to use react
            technologies like Redux, Firebase, etc
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"JavaScript"} />
            <Button value={"React.js"} />
            <Button value={"React Router"} />
            <Button value={"React Reducers"} />
            <Button value={"Redux"} />
            <Button value={"FireBase"} />
          </div>
        </div>
        {/* <div className="flex flex-col p-6 items-center py-3 text-center shadow-2xl">
          <a
            href="https://papaya-stardust-fed277.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="font-bold pb-2 dark:text-[#B33030]">
              Movie Reviewer
            </h3>
          </a>
          <a
            href="https://papaya-stardust-fed277.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto w-60 h-60 rounded "
              src={Movie}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            A Movie Review app for rating and reviewing movies
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"Tailwind"} />
            <Button value={"JavaScript"} />
            <Button value={"React.js"} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
