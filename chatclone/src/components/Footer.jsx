import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-white flex md:justify-center justify-start    sm:items-baseline translate-y-12">
      <span className="  text-xs md:text-sm lg:text-md lg:text-lg font-extrabold">
        Gemini may display inaccurate info, including about people, so
        double-check its responses.
        <Link
          className="text-black font-light border-b-[.1rem] border-[#000000b2] ml-2 "
          to={
            "https://support.google.com/gemini/answer/13594961?visit_id=638527524752794367-3056042527&p=privacy_notice&rd=1#privacy_notice"
          }
        >
          {" "}
          Your privacy and Gemini Apps
        </Link>
      </span>
    </div>
  );
}

export default Footer;
