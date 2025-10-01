import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Wrench,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  User,
  Briefcase,
  Users
} from "lucide-react";

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Sunil Gumatimath</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-light tracking-tight">
                Sunil <span className="font-normal bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Gumatimath</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">Full Stack Developer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Passionate about building scalable web solutions with Java, Python, Spring Boot, React.js, and innovative problem-solving approaches
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/sunil-gumatimath-2a6577240/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://github.com/sunil-gumatimath" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                As a passionate Full Stack Developer, I turn complex problems into elegant, user-centric solutions using Java, Python, Spring Boot, and React.js. My journey started with curiosity about how things work, driving me to build scalable web apps that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy collaborating on high-quality code, leading projects that boost efficiency by 50%, and staying current with trends. Driven to simplify lives through tech, I optimize backends and craft intuitive frontends. Outside work, I explore new stacks and contribute to open-source.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">B.E. Computer Science</p>
                  <p className="text-muted-foreground">BLDEA's V P Dr PG Halakatti College of Engineering & Technology</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2020 - 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-medium">CGPA: 6.7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Code className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">Hibernate</Badge>
                  <Badge variant="secondary">React JS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Database className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-4">Database</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Appwritter</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Wrench className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">IntelliJ</Badge>
                  <Badge variant="secondary">Postman</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Web Technologies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Vite</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Movie Discovery App */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Movie Discovery Web Application
                    </h3>
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    A modern web application featuring responsive design, debounced search functionality, and real-time data fetching from TMDB API. Achieved 50% improvement in user engagement through intuitive UI design.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">React 19</Badge>
                      <Badge variant="outline">TMDB API</Badge>
                      <Badge variant="outline">Appwrite</Badge>
                      <Badge variant="outline">Tailwind CSS</Badge>
                      <Badge variant="outline">Vite</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex gap-3">
                    <a href="https://ted-tmdb-movie-07.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button variant="outline" className="group">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                    <a href="https://github.com/sunil-gumatimath/TMDB-React-Cinema" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button variant="outline" className="group">
                        View Code
                        <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ticket Booking System */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Ticket Booking System
                    </h3>
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    A comprehensive backend system implementing full CRUD operations with REST APIs and modular architecture. Demonstrates expertise in enterprise-level Java development and database management.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Java</Badge>
                      <Badge variant="outline">Spring Boot</Badge>
                      <Badge variant="outline">Hibernate</Badge>
                      <Badge variant="outline">MySQL</Badge>
                      <Badge variant="outline">Postman</Badge>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a href="https://github.com/sunil-gumatimath/movie-ticket-booking-system" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button variant="outline" className="group">
                        View Code
                        <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Management API */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Product Management API
                    </h3>
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    A robust REST API for product management with CRUD operations, authentication, and database integration. Built with Spring Boot for scalable backend solutions.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Java</Badge>
                      <Badge variant="outline">Spring Boot</Badge>
                      <Badge variant="outline">MySQL</Badge>
                      <Badge variant="outline">REST API</Badge>
                      <Badge variant="outline">Maven</Badge>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a href="https://github.com/sunil-gumatimath/product-management-api" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button variant="outline" className="group">
                        View Code
                        <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-semibold">Java Full Stack Developer Intern</h3>
                      <Badge variant="secondary">Nov 2024 – Aug 2025</Badge>
                    </div>
                    <p className="text-primary font-medium">Jspiders Training and Development Center Bengaluru, Karnataka</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Developed robust backend systems using Core Java, JDBC, and Spring Boot with layered architecture and comprehensive exception handling</li>
                      <li>• Implemented efficient database integration with MySQL and Oracle for seamless CRUD operations</li>
                      <li>• Mastered advanced Java technologies including Hibernate ORM, Servlets, JSP, and MVC design patterns</li>
                      <li>• Built complete Ticket Booking System featuring REST APIs, modular architecture, and full-stack functionality</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-semibold">Web Developer Intern</h3>
                      <Badge variant="secondary">Aug - Sep 2023</Badge>
                    </div>
                    <p className="text-primary font-medium">Roborosx Omni Tech Solutions LLP</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Developed responsive websites improving user engagement by 50%</li>
                      <li>• Ensured cross-platform compatibility across multiple devices and browsers</li>
                      <li>• Collaborated with design team to implement modern UI/UX principles</li>
                      <li>• Led internship team to achieve 100% deliverable completion rate</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Advanced Java Technologies</h3>
                <p className="text-muted-foreground text-sm">Expertise in Spring Boot, Hibernate & MVC Architecture</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">IBM Certification</h3>
                <p className="text-muted-foreground text-sm">SQL and Relational Databases</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Team Leadership</h3>
                <p className="text-muted-foreground text-sm">Led team to 100% deliverable completion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="https://www.linkedin.com/in/sunil-gumatimath-2a6577240/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/sunil-gumatimath" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-6">Quick Message</h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">Ready to start a conversation?</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="https://mail.google.com/mail/?view=cm&to=sunilgumatimath.vs@gmail.com&su=Let's%20Connect&body=Hi%20Sunil%2C%0A%0AI%20would%20like%20to%20discuss..." target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button className="group">
                        <Mail className="mr-2 h-4 w-4" />
                        Message Me
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Sunil Gumatimath. Crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
