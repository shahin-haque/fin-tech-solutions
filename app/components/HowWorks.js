import Image from "next/image";
import React from "react";

export default function HowWorks() {
  return (
    <section id='services' className='how-works'>
      <h2>How It Works</h2>

      <div className='how'>
        <article className='how-works__article'>
          <Image src='/Screenshot 1.png' alt='' width={60} height={60} />
          <h3>Step 1: Integration</h3>
          <p>
            Seamlessly integrate AI into your existing systems with minimal
            disruption.
          </p>
        </article>
        <article className='how-works__article'>
          <Image src='/Screenshot n.png' alt='' width={60} height={60} />
          <h3>Step 2: Data Processing</h3>
          <p>
            Our AI platform processes large datasets to provide actionable
            insights in real-time.
          </p>
        </article>
        <article className='how-works__article'>
          <Image src='/Screenshot3 .png' alt='' width={60} height={60} />

          <h3>Step 3: Results</h3>
          <p>
            Unlock business opportunities and drive performance with
            AI-generated recommendations.
          </p>
        </article>
      </div>
    </section>
  );
}
