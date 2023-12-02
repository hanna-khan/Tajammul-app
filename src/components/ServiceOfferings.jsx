import React from "react";

const ServiceOfferings = () => {
  return (
    <>
      <div className="relative flex self-stretch flex-1">
        <div className="relative flex w-1/2 self-stretch bg-stone-50">
          <div className="absolute left-60 top-52 h-20 w-56 text-[52px] font-extrabold text-orange-500">
            <span className="capitalize">Services</span>
          </div>
          <div className="absolute left-60 top-64 h-28 w-80 text-[69px] font-extrabold text-yellow-400">
            <span className="capitalize">Offerings</span>
          </div>
          <div className="absolute bottom-56 left-60 h-80 w-96 text-xl font-normal text-slate-700">
            Are you tired of going to service stations only to discover that
            they are all full and having to return without getting your
            services?
            <span className="mb-0 block" />
            Tajammul.pk saves the day by allowing you to pre-book your services
            based on their availability. We keep an updated calendar so that we
            can provide you with the best possible services. You can now book a
            time slot and get your services. We offer salon, clinical, catering,
            decoration, auto mechanic, and plumbing services, as well as the
            option of hiring labor or maids for home services. Save yourself
            hours of waiting in lines by scheduling your services according to
            your availability.
          </div>
        </div>
        <div className="relative flex w-1/2 self-stretch bg-gradient-to-br from-[rgba(39,59,96,1)] to-[rgba(0,24,65,1)] pl-44">
          <div className="mr-[-12.88px] flex items-center">
            <div className="bg-vector-1 relative flex w-96 self-stretch bg-cover bg-center pb-[796px] pl-96 pt-16">
              <div className="absolute bottom-14 left-44 h-4 w-4">
                <svg
                  width="100%"
                  height="100%"
                  style={{ overflow: "visible" }}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7.51367" cy="8.05859" r="7.5" fill="#F16427" />
                </svg>
              </div>
              <div className="relative mr-[-4.12px] h-4 w-4">
                <svg
                  width="100%"
                  height="100%"
                  style={{ overflow: "visible" }}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={8} cy="7.49121" r="7.5" fill="#FDCE0C" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceOfferings;
