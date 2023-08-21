import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const ButtonTopPage = () => {
  return (
    <div className="flex justify-center py-12">
      <Link href="#">
        <div className="cursor-pointer rounded-full bg-primary p-4 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110">
          <HiOutlineChevronDoubleUp size={30} className="m-auto" />
        </div>
      </Link>
    </div>
  );
};

export default ButtonTopPage;
