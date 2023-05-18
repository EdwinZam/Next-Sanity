import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getProject } from "../../../../sanity/sanity-utils";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-700 font-semibold py-3 px-4 flex items-center space-x-2 whitespace-nowrap hover:bg-pink-500 hover:text-white transition-all"
        >
          <span>View Project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transform scale-x-[-1]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-.707-5.293a1 1 0 0 1 1.414-1.414l2 2a1 1 0 1 1-1.414 1.414L9 10.414V14a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-3.586l2.293 2.293z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
