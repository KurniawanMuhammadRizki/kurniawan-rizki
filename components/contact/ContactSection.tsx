import Link from "next/link";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      data-nav-color="white"
      className="hero min-h-[100vh] bg-black relative">
      <iframe
        src="https://my.spline.design/jeporthandcopy-73072535f1cea4856998388b2c9b7506/"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        style={{ width: "100%", height: "100%", border: "none" }}
        referrerPolicy="no-referrer"
        sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"></iframe>
      <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
      <div className="text-white flex flex-col items-start justify-between h-full pt-24 p-8">
        <div className="flex justify-end w-full space-x-4 text-sm tracking-wide uppercase z-30">
          <Link
            href="https://github.com/KurniawanMuhammadRizki"
            target="_blank">
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/kurniawanmuhammadrizki/"
            target="_blank">
            LinkedIn
          </Link>
          <Link
            href="https://drive.google.com/file/d/12llhuJ6sHAfz3i190gUb99Ar-tdM5jYj/view?usp=sharing"
            target="_blank">
            Download CV
          </Link>
        </div>

        <div className="flex flex-col space-y-4 mt-auto z-30">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-geist-mono)]"></h1>
          <div className="text-lg">
            <p className="text-gray-400 uppercase tracking-wide">Email</p>
            <p className="text-2xl font-semibold">
              kurniawanmuhammadr@gmail.com
            </p>
          </div>
          <div className="text-lg">
            <p className="text-gray-400 uppercase tracking-wide">Phone</p>
            <p className="text-2xl font-semibold">+62 813 4092 1609</p>
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-8 text-sm z-30">
          <Link href="#" className="tracking-wide uppercase">
            {"< Back to Top >"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
