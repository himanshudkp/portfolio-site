import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Image
          src={"/profile_photo.jpg"}
          width={192}
          height={192}
          quality={95}
          priority={true}
          alt="Himanshu Pandey Profile Image"
        />
      </div>
    </div>
  );
};

export default Intro;
