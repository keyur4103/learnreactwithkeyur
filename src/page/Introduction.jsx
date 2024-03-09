import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Introduction() {
  return (
    <>
      <div className="container  sm:p-0 p-4 mx-auto py-8 flex justify-center text-justify">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">
            How to learn React
          </h1>
          <h3 className="text-center">
            March 06, 2024 by &nbsp;
            <a
              target="_blank"
              href="https://keyurfataniya324.netlify.app"
              className="text-purple-500"
            >
              Keyur Fataniya
            </a>
          </h3>
          <br />
          <section className="mb-8">
            Learning React is a top priority for many JavaScript developers this
            year. According to the recent State of JS survey, React is a popular
            choice for building modern web applications. Because of its
            widespread use and high demand in the job market, many JavaScript
            developers are eager to learn React. In this guide, I aim to provide
            beginners with a comprehensive overview of how to start learning
            React without feeling overwhelmed or distracted by other topics.
          </section>
          <hr></hr>
          <br />
          <h1 className="text-center text-2xl">
            Learn React [Quickly || Fast || Easy]
          </h1>
          <br />
          <section className="mb-8">
            Learning React requires patience and dedication. As developers,
            we're fortunate to always have something new to explore and learn.
            Staying curious is key to satisfaction in this field. While learning
            React, it's important to focus solely on React itself and avoid
            distractions from other technologies. JavaScript and React are
            continuously evolving, so it's crucial to keep up with their
            advancements. Success stories abound of developers transitioning
            from React novices to proficient practitioners in just a matter of
            days or months. Some developers may be tempted to dive into
            additional libraries like Redux alongside React, assuming they're
            essential. However, adding extra complexities can hinder the
            learning process. It's best to start with React alone and master it
            step by step. This approach allows for a deeper understanding and
            smoother learning curve.
          </section>
          <hr></hr>
          <br />
          <h1 className="text-center text-2xl">React Prerequisites</h1>
          <br />

          <section className="mb-8">
            Since React is a JavaScript library, there is no way around learning
            JavaScript. It makes heavily use of JavaScript, so it's difficult to
            attempt learning React without any prior JS knowledge.
          </section>
          <hr></hr>
          <br />
          <h1 className="text-center text-2xl">
            Learn React or JavaScript first?
          </h1>
          <br />

          <section className="mb-8">
            You should understand the basics of JavaScript and have decent
            knowledge about HTML and CSS. Many recommend learning web
            development and all JS fundamentals as prerequisite before learning
            React, but the skills they recommend go far beyond what's needed to
            build basic applications with React.js. A couple of them may be:
          </section>
          <br />

          <div className="flex justify-center">
            <ul className="max-w-md list-disc">
              <li>Functions are first-class citizens in JavaScript</li>
              <li>bind(), apply(), and call()</li>
              <li>scopes and closures</li>
              <li>this</li>
              <li>Object Methods</li>
              <li>Array Methods</li>
              <li>Prototypical Inheritance -&gt; ES6 Class</li>
              <li>Callbacks and Promises</li>
              <li>Event Loop</li>
              <li>Event Bubbling</li>
              <li>Regular Expressions</li>
              <li>Error Handling</li>
              <li>JavaScript ES6 and beyond</li>
              <li>Hoisting, Memoization</li>
              <li>Declarative vs imperative programming</li>
              <li>Functional vs object-oriented programming</li>
            </ul>
          </div>
          <br />
          <section className="mb-8">
            I believe it's not necessary to have all this knowledge. It can be
            very disillusioning for beginners new to JavaScript, React and Web
            Development. You don't want to hang around in the "Scopes and
            Closures"-land while you could build real projects instead that
            motivate you to keep going. The "aha"-moment for grasping closures
            will come along the way. Personally I didn't know half of the things
            in the list when I started to learn React and I still have to look
            up regular expressions because I haven't bothered learning them; and
            still work successfully as freelancer for companies.
          </section>
          <section className="mb-8">
            I believe most of JavaScript can be learned along the way when
            learning React. Doing so allows you to experience it in context
            while building web applications. That's exciting and drives us as
            human beings. Keep yourself excited while learning and don't spend
            too long with the fundamentals while not applying them in a
            real-world scenario. Start building real projects. Stay curious!
            Just move back and forth between JavaScript and React while you
            learn React.
          </section>
          <br />
          <hr />
          <h1 className="text-center text-2xl">Learn React or jQuery?</h1>
          <br />
          <section>
            Historically jQuery filled the gap between vanilla JavaScript and
            modern frameworks such as React, Angular, and Vue. Early JavaScript
            wasn't as efficient in the browser as it is nowadays. That's why
            there was a real need for jQuery.
          </section>
          <br />
          <section>
            However, modern JavaScript frameworks surpass jQuery. Hence my
            recommendation: Don't bother with jQuery. If you are working on a
            larger application that utilizes React at your new job, it is likely
            to be confronted with jQuery in the application's legacy areas. But
            it's okay to not being proficient with jQuery and look up online
            what you need to get the job done. As an alternative, try to migrate
            the code from jQuery to React as a learning opportunity.
          </section>
          <br />
          <hr />
          <br />
          <h1 className="text-center text-2xl">Why should I learn React?</h1>
          <br />
          <section>
            Why do you want to learn React in the first place? Beginners may
            know about the shiny modern libraries in JavaScript but often don't
            ask themselves why they need them. They may only know that they are
            in huge demand by companies and jobs. It can make sense, though, to
            step back and ask the question: Why do I need this?
          </section>
          <br />
          <section>
            It doesn't only apply to React, but to all the other frameworks you
            will learn as a developer. What problem does it solve for me? Too
            often people throw libraries on top of their tech stack without
            experiencing a problem that necessitates using it in the first
            place. That's why I believe it is a great learning experience to
            implement the identical application with vanilla JavaScript and
            React. It demonstrates why using the new library is beneficial when
            solving your problem. The same technique can be applied when
            deciding whether you want to learn React or another solution such as
            Vue or Angular. Build a basic application with the solutions of your
            choice and compare the development experience. Which of the
            solutions felt right for you?
          </section>
          <br />
          <hr />
          <h1 className="text-center text-2xl">Learn React Step by Step</h1>
          <br />
          <section>
            I strongly believe the best start is going through the official 7
            &nbsp;
            <a
              href="https://react.dev/"
              className="text-purple-500"
              target="_blank"
            >
              React documentation
            </a>
            . The documentation keeps up with recent changes, is not biased,
            teaches you everything the React way, and is put together by the
            React core team and community.
          </section>
          <br />
          <hr />
          <h1 className="text-center text-2xl">Learn with React Docs</h1>
          <br />
          <section>
            Being referred to the documentation of a library as a beginner in
            web development can be intimidating. But I strongly believe it's the
            best way to learn something new. On your path to becoming a
            developer you will often need to use the official documentation, so
            why not get used to it now? It comes with these benefits:
          </section>
          <br />

          <div className="flex justify-center">
            <ul className="max-w-md list-disc">
              <li>Includes beginner tutorial</li>
              <li>No commercial interest</li>
              <li>Opinionated way of doing things</li>
              <li>
                Thoughtfully put together by core contributors and community
              </li>
              <li>Latest material and updates for new versions</li>
              <li>API references</li>
            </ul>
          </div>
          <br />
          <section>
            Every time I pick up a new tech, I don't check any courses or books,
            I go straight to the tech's documentation and check whether there is
            a beginner tutorial. Often there is one and that's my entry point
            into a new world. From there, I can always check for other learning
            material. That's why I write my tutorials and books in close
            relation to the documentation by always refereing it in my guides.
            It helps beginners learn to use the documentation and will make them
            more efficient and effective now and in the future. s
          </section>
          <br />
          <hr />
          <br />
          <h1 className="text-center text-2xl">React Setup for Beginners</h1>
          <br />
          <section>
            How do you get started with coding a React project? If you don't
            have an editor/terminal or IDE installed and want to check out what
            React feels like in a code environment, you can use the go-to online
            code editor CodeSandbox. Play around with React. If you want to
            learn how to develop React applications on your local machine, check
            out these guides:
          </section>
          <br />
          <div className="flex justify-center">
            <ul className="max-w-md list-disc">
              <li>
                Execute JavaScript with Node and NPM: While Node.js makes it
                possible to run JavaScript outside of the browser, NPM (node
                package manager) allows you to install libraries like React to
                your project.
              </li>
              <li>
                Develop with Visual Studio Code (VS Code): A popular IDE and a
                go-to solution for React developers. VS Code comes with an
                editor to learn React development and a terminal (command line)
                to start your React project and install libraries for it.
              </li>
              <li>
                Learn with Vite: 80% of the React tutorials create a React
                project with it. You can focus only on learning React while all
                the toolings around it are taken care of.
              </li>
              <li>
                Format with Prettier: Opinionated code formatter that
                automatically formats your code in your development environment.
                It comes with a straightforward setup and integrations for
                popular editors (VS Code).
              </li>
            </ul>
          </div>
          <br />
          <hr />
          <h1 className="text-center text-2xl">Learn Advanced React</h1>
          <br />
          <section className="mb-8">
            After you learn the basics with React components, props/state, and
            React's JSX syntax, you can dive deeper with advanced React concepts
            and patterns.
          </section>
          <br />
          <div className="flex justify-center">
            <ul className="max-w-md list-disc">
              <li>
                <a
                  href="https://react.dev/reference/react/hooks"
                  className="text-purple-500"
                  target="_blank"
                >
                  Learn React Hook
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev/reference/react/components"
                  className="text-purple-500"
                  target="_blank"
                >
                  Learn React Higher-Order Component
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev/learn/passing-props-to-a-component"
                  className="text-purple-500"
                  target="_blank"
                >
                  Learn React Render-Prop Component
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev/reference/react/useContext"
                  className="text-purple-500"
                  target="_blank"
                >
                  Learn React Context
                </a>
              </li>
            </ul>
          </div>
          <br />
          <section>
            Being equipped with these advanced React techniques, you should be
            comfortable to dive into larger React applications. React Hooks may
            make the other Higher-Order Components and Render Prop Components
            less used in the future, but you should still see them fairly often
            throughout the next year.
          </section>
          <br />
          <section>
            That's it from my side. Stay curious, commit to it every day by
            getting your hands dirty, be public about it, and run a marathon and
            not a sprint. Challenge yourself to advance your skills as a
            developer and become a React developer this year!
          </section>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Introduction;
