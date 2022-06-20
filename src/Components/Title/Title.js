import { LineSvg } from "../icons";

const Title = ({ num, title }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="flex items-center w-full mt-10"
    >
      <h2 className="text-xl md:text-4xl text-text">
        <span className="text-neon font-fira">0{num}.</span> {title}
      </h2>
      <LineSvg className="relative md:w-96 hidden md:inline-flex !ml-10" />
    </div>
  );
};

export default Title;
