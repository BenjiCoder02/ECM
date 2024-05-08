import Link from "next/link";
import SignUpForm from "./Signup/SignupForm";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <div className="flex-1">Copyright ©
        2024
        ECM Inc. All rights reserved.
      </div>
      <ul className="flex-1 flex justify-between w-2/3 mt-5 mb-5">
        <li className="">
          <a className="" href="#" data-analytics-title="privacy policy">Privacy Policy</a>
        </li>
        <li className="">
          <a className="" href="#" data-analytics-title="terms of use">Terms of Use</a>
        </li>
        <li className="">
          <a className="" href="#" data-analytics-title="sales and refunds">Sales and Refunds</a>
        </li>
        <li className="">
          <a className="" href="#" data-analytics-title="legal">Legal</a>
        </li>
        <li className="">
          <a className="" href="#" data-analytics-title="site map">Site Map</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
