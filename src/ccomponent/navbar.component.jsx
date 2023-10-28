const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-between py-6 items-center">
      <div>
        <h2 className="text-2xl font-rubic dark:text-white">DEVELOPEDBY</h2>
      </div>
      <div className="flex gap-5">
        <button onClick={() => setDarkMode(!darkMode)}>
          <i className="dark:text-white fas fa-moon text-2xl "></i>
        </button>
        <a
          href="https://drive.google.com/file/d/1-phtF6qfDSc-mClNeYSkmnIMDY383o9N/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-[#B33030] to-[#A1B57D] text-white font-bold py-1 px-3 rounded"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default NavBar;
