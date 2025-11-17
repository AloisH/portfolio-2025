<template>
  <SectionTemplate>
    <div class="px-4 py-8">
      <h2 class="text-sm text-gray-500 font-semibold tracking-wide mb-8">02 TESTIMONIALS</h2>

      <div class="grid lg:grid-cols-2 gap-6">
        <div class="group relative border border-gray-200 p-6 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 hover:border-accent-200 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
          <div class="absolute -top-2 -left-2 text-6xl text-accent-200 font-serif opacity-20 select-none">"</div>
          <div class="relative z-10">
            <p class="text-gray-800 leading-relaxed font-medium">
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
          <div class="mt-6 flex gap-4 items-center relative z-10">
            <div class="relative">
              <NuxtImg
                src="/fabio-diso.png"
                width="48"
                height="48"
                alt="Portrait photo of Fabio Diso"
                loading="lazy"
                class="rounded-full ring-2 ring-white shadow-md"
              />
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div class="font-semibold text-gray-900">Fabio Diso</div>
              <div class="text-sm text-gray-500">Product Owner</div>
            </div>
          </div>
        </div>

        <div class="group relative border border-gray-200 p-6 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 hover:border-accent-200 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
          <div class="absolute -top-2 -left-2 text-6xl text-accent-200 font-serif opacity-20 select-none">"</div>
          <div class="relative z-10">
            <p class="text-gray-800 leading-relaxed font-medium">
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
          <div class="mt-6 flex gap-4 items-center relative z-10">
            <div class="relative">
              <NuxtImg
                src="/loup-dallier.png"
                width="48"
                height="48"
                alt="Portrait photo of Loup Dallier"
                loading="lazy"
                class="rounded-full ring-2 ring-white shadow-md"
              />
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div class="font-semibold text-gray-900">Loup Dallier</div>
              <div class="text-sm text-gray-500">Software Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>
