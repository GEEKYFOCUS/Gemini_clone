import { useEffect, useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useText } from "../contexts/TextContext";
import { fetchAddress } from "../hooks/useGetLocation";

// import { getPosition } from "../hooks/useGetLocation";

function UserLocation() {
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const { isOpen } = useText();

  useEffect(() => {
    fetchAddress()
      .then((data) => {
        setAddress(data);
      })
      .catch((err) => {
        setError("An Error occur while fetching your location");
        throw new Error(`Failed to get your location`);
      });
  }, []);

  const handleUpdateLocation = async () => {
    setError(null);
    try {
      const data = await fetchAddress();
      setAddress(data);
      alert("Location updated successfully");
    } catch (err) {
      setError(err.message);
    } finally {
      // setLoading(false);
    }
  };
  console.log(address);
  return (
    <div
      className={`${
        isOpen ? "opacity-1 visible block" : "opacity-0 invisible hidden"
      } grid grid-cols-[auto_1fr] gap-x-4 gap-y-[-2rem] mt-8`}
    >
      <span className="text-[4rem] font-extrabold text-[#0000008a] bg-[#0000008a] mt-3 w-2 h-2 rounded-full self-start row-span-3 "></span>
      <span className="text-[1.2rem] font-semibold text-black">
        {address || error}
      </span>
      <div className="flex items-center">
        <Link className="text-[#0b57d0] text-sm  font-semibold active:text-[#0b57d0] visited:text-[#0b57d0]">
          From your IP address
        </Link>
        <span>
          <PiDotOutlineFill className="text-sm place-self-end" />
        </span>
        <Link
          className="text-[#0b57d0] text-sm  font-semibold active:text-[#0b57d0] visited:text-[#0b57d0]"
          onClick={handleUpdateLocation}
        >
          Update Location
        </Link>
      </div>
    </div>
  );
}

export default UserLocation;
