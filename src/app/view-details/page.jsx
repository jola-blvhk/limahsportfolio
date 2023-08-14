"use client";
import { ViewDetailsDescription } from "@/components";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { PiCaretLeft } from "react-icons/pi";
import projects from "../../components/featuredProjectsdb.json";
import Image from "next/image";
import { poppins } from "../../../utils/fonts";
import ReactPlayer from "react-player";

const Detail = () => {
  const router = useRouter();
  const id = useSearchParams().get("id");
  const info = projects.filter((info) => {
    return info.id === id;
  });

  const data = info[0];

  return (
    <main className="pt-20 grid gap-16 bg-gradient-black">
      <section className="bg-gradient-black  px-3 md:px-6 lg:px-9">
        <div className=" maxWidthSection ">
          <p
            className="font-bold my-10 flex items-center cursor-pointer"
            onClick={() => router.back()}
          >
            <PiCaretLeft className="text-xl" />
            <span className="ml-4">Go Back</span>
          </p>

          <ViewDetailsDescription
            id={data.id}
            name={data.title}
            description={data.description}
            role={data.role}
            year={data.year}
            status={data.status}
            image={data.descriptionImage}
          />
        </div>
      </section>
      <div className="hidden w-full bg-gradient-black px-3 md:px-6 lg:px-9 maxWidthSection md:grid grid-cols-3 justify-between text-center border-y py-8">
        <div className="text-center  space-y-6 grid place-items-center">
          <h5 className="">CLIENT</h5>
          {data.id !== "4" ? (
            <Image
              src={data.client}
              alt={data.name}
              width={50}
              height={50}
              className="w-auto h-[50%] object-contain"
            />
          ) : (
            <h1
              className={`${poppins.className} text-4xl capitalize text-[#A6908F] font-semibold`}
            >
              {data.client}
            </h1>
          )}
        </div>
        <div className="grid text-center space-y-6">
          <h5>INDUSTRY</h5>
          <p className="">{data.industry}</p>
        </div>
        <div className="grid text-center space-y-6">
          <h5>PLATFORM</h5>
          <p>{data.platform}</p>
        </div>
      </div>

      <section className="px-3 md:px-6 lg:px-9 mb-16">
        <div className="maxWidthSection grid gap-10">
          {id === "1" && (
            <div className="w-full h-full ">
              <ReactPlayer
                url="/hardsandsPro/hardsands.mov"
                light={
                  <img
                    src="/hardsandsPro/second.svg"
                    className="w-[100%] h-[80%] object-cover"
                    alt="Thumbnail"
                  />
                }
                controls
                width="100%"
                height="100%"
                className="w-full h-full"
              />
            </div>
          )}

          <div
            className={`grid gap-8  ${id === "2" && "md:grid-cols-2"}`}
          >
            {id === "2" &&
              data?.designImages?.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
            {id === "1" &&
              data?.designImages?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index === 0 ? "md:col-span-2" : "md:col-span-1"
                    }`}
                  >
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
            {id === "4" &&
              data?.designImages?.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detail;
