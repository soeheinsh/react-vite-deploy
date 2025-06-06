const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* <div className="w-80 h-100 bg-gray-200 rounded-lg mx-auto mb-8 md:mb-0 ">
                <img src="../../public/favicon.jpg" alt="my image" />
              </div> */}

              <div className="w-80 h-100 bg-gray-200 rounded-lg mb-8 md:mb-0 ">
                <img
                  src="../../public/favicon.jpg"
                  alt="my image"
                  className="block w-full"
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-600 mb-6">
                Passionate backend developer with 4 years of expertise in
                building scalable web applications and APIs using{" "}
                <b>PHP, Laravel, and Vue.js</b> Skilled in:
              </p>

              <div style={{ marginLeft: "30px" }}>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    {" "}
                    Designing secure RESTful APIs for web and mobile apps.
                  </li>
                  <li>
                    {" "}
                    Integrating third-party services (payment gateways,
                    real-time systems).
                  </li>
                  <li> Implementing authentication/authorization systems.</li>
                  <li>
                    {" "}
                    Collaborating with frontend teams to deliver seamless user
                    experiences.
                  </li>
                </ul>
              </div>
              <br />

              <p className="text-lg text-gray-600 mb-6">
                A quick learner who thrives in fast-paced environments. Actively
                exploring cloud computing (AWS, DevOps) to enhance technical
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
