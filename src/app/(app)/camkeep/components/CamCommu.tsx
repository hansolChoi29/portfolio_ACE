"use client";

import Image from "next/image";

export default function CamCommu() {
  return (
    <section>
      <article>
        <div>commu</div>
        <Image
          src="/images/camkeep/keepcommu.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
      <article>
        <div>게시</div>
        <Image
          src="/images/camkeep/keepcommuadd.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
    </section>
  );
}
