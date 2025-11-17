<template>
  <SectionTemplate>
    <div class="px-4 py-8">
      <h2 class="text-sm text-gray-500 font-semibold tracking-wide mb-8">02 TESTIMONIALS</h2>

      <div class="grid lg:grid-cols-2 gap-6">
        <div class="border border-gray-200 p-6 flex flex-col justify-between bg-white hover:border-gray-300 transition-all duration-200">
          <div>
            <p class="text-gray-700 leading-relaxed">
              It is my pleasure to recommend Alois Heloir as an exceptional software
              developer. From the moment Alois joined our team, his outstanding
              technical skills significantly elevated our group's capabilities. His
              profound knowledge and intuitive grasp of technology are truly
              impressive. Alois possesses an exceptional understanding of agile
              methodologies, particularly Scrum. He seamlessly integrates his
              operational activities with a comprehensive knowledge of modern,
              market-relevant applications. This combination highlights his ability
              to excel in a dynamic and fast-paced environment.
            </p>
          </div>
          <div class="mt-6 flex gap-4 items-center">
            <NuxtImg
              src="/fabio-diso.png"
              width="48"
              height="48"
              alt="Portrait photo of Fabio Diso"
              loading="lazy"
              class="rounded-full"
            />
            <div>
              <div class="font-semibold">Fabio Diso</div>
              <div class="text-sm text-gray-500">Product Owner</div>
            </div>
          </div>
        </div>

        <div class="border border-gray-200 p-6 flex flex-col justify-between bg-white hover:border-gray-300 transition-all duration-200">
          <div>
            <p class="text-gray-700 leading-relaxed">
              I had the pleasure of working with Aloïs, where he consistently
              demonstrated strong expertise in web development. Aloïs is highly
              skilled in several web frameworks, making him versatile and adaptable
              to various project needs. His ability to navigate complex technical
              challenges and deliver efficient, maintainable code is exceptional.
              Beyond his technical skills, he is a collaborative and reliable team
              member, always contributing positively to the team dynamic. I highly
              recommend Aloïs for any web development role.
            </p>
          </div>
          <div class="mt-6 flex gap-4 items-center">
            <NuxtImg
              src="/loup-dallier.png"
              width="48"
              height="48"
              alt="Portrait photo of Loup Dallier"
              loading="lazy"
              class="rounded-full"
            />
            <div>
              <div class="font-semibold">Loup Dallier</div>
              <div class="text-sm text-gray-500">Software Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>
