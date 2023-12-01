import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full h-[881px] bg-stone-50">
        <div className="mx-[100px]">
          <div className="text-yellow-400 text-[70px] font-extrabold capitalize text-center">
            About us
          </div>
          <div className="flex container m-auto">
            <div className="flex-1 ml-4"> {/* Add ml-4 for left margin */}
              <img
                className="w-[320px] h-[430px]"
                src="https://s3-alpha-sig.figma.com/img/35f5/e49e/e9d6e54d7131f3304017a89a8b90de4f?Expires=1702252800&Signature=How79Doi5l~s1AqIxcMkfIZzd5m1Likj-L8v73OczxyuqH2VxVcaWWV3-N3X~kMn-blH02MPS71YzMacAVivD1KLYCRAvDaLbhb~Ox~38b8NeUVyBvGHSMUw2PboEPA8Wv6U-b0A7DzIhW18POW0ny9a5hoCqS4DU1qd-bdDjQxxcYQbh05sUu5~Pb0gTCeJxc4OYK12cxjdi0NzzwgceUKkpMaWl-p5c1OB5cKuf6bPcY0qPlawRPSqLpheWK2X1VOfhNinhPV-zIBtDh4e03MF8rsnAy6QIDgRf-XaOn-2cnlCUP0H5nLIWkmIcFgzzN6oL5d0FYVJMFiSzUicFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="mobile image"
              />
            </div>
            <div className="flex-1 mr-4"> {/* Add mr-4 for right margin */}
              <div className="text-orange-500 text-[15px] font-medium leading-[23px]">
                Shopping Made Easy
              </div>
              <div className="mt-[120px] w-[600px] text-xl font-normal leading-[normal] tracking-[0px] text-slate-700">
                Tajammul is an online solution for online groceries, food, and
                daily needs delivery. More importantly, it provides a platform for
                consumers to book services based on their current location. Users
                can look for the availability of service stations, such as salons,
                clinics, dental clinics, labor/maid hiring, and decoration
                services. Also, merchants can register as salespeople promoting
                their businesses, such as food delivery restaurants, grocery
                stores and medical pharmacies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
