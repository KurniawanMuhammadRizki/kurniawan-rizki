import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section data-nav-color="black" className="hero min-h-[100vh] relative">
      <iframe
        src="https://my.spline.design/jeportsmileycopy-5983c6036a9c91f85b98523afbab89e8/"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        style={{ width: "100%", height: "100%", border: "none" }}
        referrerPolicy="no-referrer"
        sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"></iframe>
      <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
      <div className="hero-content text-white absolute bottom-0 left-0 p-8">
        <div className="max-w-md mx-auto sm:ml-0 md:ml-0 lg:ml-0">
          <h1 className="text-4xl md:text-5xl font-bold lg:w-[750px] font-[family-name:var(--font-geist-mono)]">
            A full-stack wizard brewing future digital solutions with a bit of
            code, a lot of creativity, and a good cup of coffee.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
