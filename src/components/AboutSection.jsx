import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relatie">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Aspiring Cybersecurity Enthusiast
            </h3>
            <p className="text-muted-foreground">
              Dedicated Full Stack Web Developer with a strong foundation in
              creating dynamic and responsive web applications. Leveraging
              React, NodeJS, and MongoDB (commonly tech stack used), to build
              robust and user-friendly solutions.
            </p>
            <p className="text-muted-foreground">
              Aspiring cybersecurity enthusiast, particularly interested in
              penetration testing. My commitment to continuous learning and
              problem-solving drives my passion for securing digital landscapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Kazuya_Sato_CV_Updated.pdf"
                download="Kazuya_Sato_CV_Updated.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 2-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 2-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    User Friendly Design
                  </h4>
                  <p className="text-muted-foreground">
                    Managing UI/UX to create intuitive and easy to navigate
                    interfaces using latest frontend technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 2-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    Development Collaboration
                  </h4>
                  <p className="text-muted-foreground">
                    Has experience working with small and large development team
                    to create web app projects for internal and external
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
