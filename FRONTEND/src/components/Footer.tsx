function Footer() {
  return (
    <section id="Footer" className="font-serif md:px-10 py-5">
      <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0">
        <div className="border-t border-(--border) py-5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 text-center lg:text-left ">
          {/* Left */}
          <div className="flex flex-col justify-center space-y-1">
            <p className="text-lg sm:text-xl text-(--text) font-normal">
              Thanks for stopping by.
            </p>
            <p className="text-lg sm:text-xl italic text-(--text)">
              I look forward to hearing from you.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col space-y-1 md:pl-16 border-(--border) justify-center text-center lg:text-right">
            <p className="text-xs sm:text-sm italic text-(--text)">
              Designed & Developed by
            </p>

            <p className="text-base text-(--text) font-normal tracking-wide">
              Yoko Hermanto
            </p>

            <p className="text-xs text-(--text) font-serif select-none">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;