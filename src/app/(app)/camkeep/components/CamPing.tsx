"use client";

import Image from "next/image";

export default function CamPing() {
  return (
    <section>
      CamEquipment&local
      <article>
        <div>캠핑장</div>
        <Image
          src="/images/camkeep/keeplocal.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
      <article>
        <div>캠핑용품</div>{" "}
        <Image
          src="/images/camkeep/keepequi.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
    </section>
  );
}
