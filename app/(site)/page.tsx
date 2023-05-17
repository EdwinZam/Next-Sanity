import Image from "next/image";
import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-5xl font-extrabold mb-3">
        Hola Soy{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Edwin
        </span>
      </h1>
      <div className="mt-3 text-xl text-gray-700">
        <p>
          Soy un apasionado desarrollador de aplicaciones web. Diseño interfaces
          atractivas y funcionales para brindar experiencias cautivadoras a los
          usuarios.
        </p>
        <br />
        <p>
          En mi portafolio, encontrarás proyectos destacados donde aplico mi
          experiencia en HTML, CSS y JavaScript junto con React. Mi enfoque se
          centra en la excelencia y la calidad.
        </p>
      </div>
      <h2 className="mt-10 font-bold text-gray-600 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
