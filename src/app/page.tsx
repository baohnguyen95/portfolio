import Link from 'next/link';
import Image from 'next/image';

import Header from "@/components/Header";
import { CONFIG } from "@/components/config/config";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const projectBorder = `flex flex-row space-x-2 group hover:border-secondary hover:bg-secondary duration-200 rounded px-1.5 py-1 border-neutral-800 items-center`;

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mt-6 space-y-2">
        <span className="font-bold">About me</span>
        <span>
          {CONFIG.description}
        </span>
      </div>
      <div className="flex flex-col mt-6 space-y-5">
        <span className="font-bold">Featured Projects</span>
        <div className="flex flex-col space-y-2">
          {CONFIG.projects.map((project,idx) => {
            return (
              <div className={`${projectBorder}`} key={idx}>
                <Link href={project.link} target='_blank' className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center space-x-3">
                    <Image 
                      src={project.image}
                      alt=""
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{project.name}</span>
                      <span>{project.description}</span>
                    </div>
                  </div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="justify-end"
                    >
                      <path
                        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                        fill="currentColor"
                      />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
