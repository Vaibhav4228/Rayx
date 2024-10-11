"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardExample() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {" "}
      {/* Added gap-6 for spacing */}
      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/design3.jpeg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 dark:text-white"
            >
              <div className="flex flex-col justify-start w-full">
                <h1 className="text-xl font-bold text-start mb-7">
                  Poster Maker
                </h1>
                <p className="text-sm text-gray-500">
                  It's not a party without BeFunky's Graphic Designer. Our
                  Poster Maker simplifies the process of designing captivating
                  posters for your next celebration, business meeting, or any
                  other event.
                </p>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      {/* Repeat the same structure for the remaining cards */}
      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/social media.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 dark:text-white"
            >
              <div className="flex flex-col justify-start w-full">
                <h1 className="text-xl font-bold text-start mb-7">
                  Social Media Poster
                </h1>
                <p className="text-sm text-gray-500">
                  Use effortless template design, create professional-quality
                  brochures and keep your audience engaged from the front cover
                  to the very last detail.
                </p>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src=""
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 dark:text-white"
            >
              <div className="flex flex-col justify-start w-full">
                <h1 className="text-xl font-bold text-start mb-7">
                  Infographic Maker
                </h1>
                <p className="text-sm text-gray-500">
                  Help your audience understand your content at a glance. Take
                  complex subject matter and make it shareable, eye-catching and
                  easy to understand.
                </p>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/design1.jpeg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 dark:text-white"
            >
              <div className="flex flex-col justify-start w-full">
                <h1 className="text-xl font-bold text-start mb-7">
                  Banner Maker
                </h1>
                <p className="text-sm text-gray-500">
                Capture your audience's attention with expertly designed banner templates for web ads, social media, Etsy stores and so much more.
                </p>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      {/* Repeat the same structure for the remaining cards */}
      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/design2.webp"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 dark:text-white"
            >
              <div className="flex flex-col justify-start w-full">
                <h1 className="text-xl font-bold text-start mb-7">
                  Flyer Maker
                </h1>
                <p className="text-sm text-gray-500">
                Make your flyers stand out. Use drag-and-drop simplicity to add your logo, unique vector graphics, and a huge selection of fonts to design flyers that would catch anyone's eye.
                </p>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/design3.jpeg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 dark:text-white"
            >
              <div className="flex flex-col justify-start w-full">
                <h1 className="text-xl font-bold text-start mb-7">
                  Card Maker
                </h1>
                <p className="text-sm text-gray-500">
                Nothing says love like a homemade card. Show your friends and family you care and make them a custom card, beautifully designed with BeFunky.
                </p>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
