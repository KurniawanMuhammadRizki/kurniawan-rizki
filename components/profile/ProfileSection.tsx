import Image from "next/image";
import AnimationPopupWrapper from "../animations/AnimationPopupWrapper";
import ImageAnimationWrapper from "../animations/ImageAnimationWrapper";

const ProfileSection: React.FC = () => {
  return (
    <section
      data-nav-color="white"
      className="flex py-24 flex-col lg:flex-row items-center justify-between min-h-screen px-5 lg:px-10 bg-black">
      <div className="lg:w-3/5 w-full mb-6 lg:mb-0">
        <AnimationPopupWrapper
          y={40}
          transition={{ ease: "easeOut", duration: 1 }}>
          <h2 className="text-2xl lg:text-4xl font-light leading-relaxed text-white mb-4">
            From a bachelor&apos;s degree in Informatics Engineering to
            mastering software development at Purwadhika Digital School, my
            journey in tech is just getting started.
          </h2>
          <p className="text-white">
            Meet Kurniawan Muhammad Rizki, a passionate Software Developer who
            believes in the magic of technology. Armed with a strong foundation
            in Informatics Engineering and enriched by the comprehensive
            Software Engineering program at Purwadhika Digital Technology
            School, I&apos;ve dedicated myself to mastering the art of
            full-stack development. From my base in Depok, Indonesia, I craft
            digital solutions that bridge imagination and functionality, fueled
            by creativity and, of course, a good cup of coffee.
          </p>
        </AnimationPopupWrapper>
      </div>

      <div className="lg:w-2/5 w-full flex justify-center">
        <ImageAnimationWrapper
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}>
          {" "}
          <Image
            src="/profile/kukiImage.jpeg"
            alt="Profile Image"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </ImageAnimationWrapper>
      </div>
    </section>
  );
};
export default ProfileSection;
