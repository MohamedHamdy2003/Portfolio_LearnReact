import React from "react";

const Skills = () => {
  return (
    <section className="bg-dark text-white py-5"
        style={{ marginBottom : "7rem" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1>Skills</h1>
          <div>
            <p
              className="text-light mt-5 text-center mx-auto"
                style={{ maxWidth : "75%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              dolores, dicta eligendi laboriosam aperiam at nemo neque? Nulla,
              itaque excepturi? Incidunt eius earum assumenda eveniet animi
              quasi, doloribus tenetur, quibusdam neque nemo sunt dolorum optio
              laudantium, odio natus illum quae labore nesciunt corrupti
              provident exercitationem fugit? Aliquid quidem eveniet eaque.
            </p>
          </div>
        </div>

        <div className="row px-5 py-5 justify-content-center">
          {/* Left Side */}
          <div className="col-md-4 mb-4">
            <h5 className="border-bottom pb-2 mb-3">MY FOCUS</h5>
            <p>UI/UX Design</p>
            <p>Responsive Design</p>
            <p>Web Design</p>
            <p>Mobile App Design</p>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
            {/* Skill */}
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>HTML</span>
              </div>
              <div className="progress">
                <div className="progress-bar w-50"></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="progress">
                <div className="progress-bar bg-success w-70">CSS</div>
              </div>
            </div>

            <div className="mb-3">
              <div className="progress">
                <div className="progress-bar bg-info w-80">JavaScript</div>
              </div>
            </div>

            <div className="mb-3">
              <div className="progress">
                <div className="progress-bar bg-warning w-75">React</div>
              </div>
            </div>

            <div className="mb-3">
              <div className="progress">
                <div className="progress-bar bg-danger w-60">Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
