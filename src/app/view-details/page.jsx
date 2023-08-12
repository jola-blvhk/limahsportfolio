"use client";
import { ViewDetailsDescription } from "@/components";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { PiCaretLeft } from "react-icons/pi";
import projects from "../../components/featuredProjectsdb.json";
import Image from "next/image";
import { poppins } from "../../../utils/fonts";

const Detail = () => {
  const router = useRouter();
  const id = useSearchParams().get("id");
  const info = projects.filter((info) => {
    return info.id === id;
  });

  const data = info[0];

  return (
    <main className="pt-20 grid gap-16 bg-gradient-black">
      <section className="bg-gradient-black">
        <div className=" px-3 md:px-6 lg:px-9 maxWidthSection ">
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
            image={data.image}
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
      <div></div>
    </main>
  );
};

export default Detail;
