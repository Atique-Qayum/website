"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div>
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition{{
                        type: 'tween',
                        duration: 0.2,
                    }}
                >
                    <Image
                        src="/components/profile-pic (6).png"
                        width={500}
                        height={500}
                        alt="Profile Image"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white'
                    />
                </motion.div>

                <motion.span className='absolute bottom-0 right-0 text-4xl'
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 0.1
                        duration: 0.7
                >
                    ✅
                </span>
            </div>
        </div>
    </section>
  )
}
