import React from 'react'
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { CONFIG } from '@/components/config/config'

const socialBorder = `border group hover:border-secondary hover:bg-secondary duration-200 rounded px-1.5 py-1 border-neutral-800 items-center flex`;

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full space-y-3 md:space-y-0">
      <div className="flex flex-row space-x-3">
        <Avatar>
          <AvatarImage src={CONFIG.headshot} alt="headshot" />
          <AvatarFallback>Headshot</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{CONFIG.name}</span>
          <span className="text-secondary">{CONFIG.title}</span>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        {CONFIG.socials.map((social, idx) => {
          return (
              <TooltipProvider key={idx}>
              <Tooltip>
                <TooltipTrigger className={`${socialBorder}`}>
                  <Link href={social.link} target="_blank">
                    {social.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  {social.platform}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  )
}
