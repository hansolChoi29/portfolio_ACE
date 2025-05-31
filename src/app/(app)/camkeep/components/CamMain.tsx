"use client";
import Image from "next/image";

export default function CamMain() {
  return (
    <section>
      <article>
        <div>main</div>
        <Image
          src="/images/camkeep/keepmain.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
      <article>
        <div>newbie</div>{" "}
        <Image
          src="/images/camkeep/keepnewbie.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
      <article>
        <div>checkList</div>{" "}
        <Image
          src="/images/camkeep/keepcheck.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
    </section>
  );
}
