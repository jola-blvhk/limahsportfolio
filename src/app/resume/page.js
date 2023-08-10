import Image from "next/image";
import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <main className="py-32">
      <Link href="https://docs.google.com/document/d/1bv8v-xWeNrSdEF1VLldPdxx4puJ9a3v1vQXdIvViM3s/edit">
        https://docs.google.com/document/d/1bv8v-xWeNrSdEF1VLldPdxx4puJ9a3v1vQXdIvViM3s/edit
      </Link>

      <Image
        src="https://docs.google.com/document/d/1bv8v-xWeNrSdEF1VLldPdxx4puJ9a3v1vQXdIvViM3s/edit"
              fill
              alt="image"
      />
    </main>
  );
};

export default Resume;
