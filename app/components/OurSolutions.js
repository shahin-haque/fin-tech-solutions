import Image from "next/image";
import React from "react";

export default function OurSolutions() {
  return (
    <section id='solutions'>
      <div className='container'>
        <div>
          <div className='section-title'>
            <h2>Our Solutions</h2>
            <p>
              Our solutions are designed to help you achieve your goals and
              overcome challenges.
            </p>
            <div />
          </div>
          <div className='row'>
            <article className='col'>
              <Image
                src='/Screenshot a.png'
                alt='img'
                width={300}
                height={150}
              />

              <h3>Smart Automation</h3>
              <p>
                Optimize workflows and automate repetitive tasks, allowing your
                team to focus on high-value work.{" "}
              </p>
            </article>
            <article className='col'>
              <Image
                src='/Screenshot 2.png'
                alt='img'
                width={300}
                height={150}
              />
              <h3>AI Analytics </h3>
              <p>
                Transform data into actionable insights with AI-powered
                analytics that guide smarter business decisions.
              </p>
            </article>
            <article className='col'>
              <Image
                src='/Screenshot m.png'
                alt='img'
                width={300}
                height={150}
              />
              <h3> Predictive Models </h3>
              <p>
                Leverage machine learning to predict outcomes and optimize
                strategies for maximum impact.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
