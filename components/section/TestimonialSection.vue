<template>
  <SectionTemplate>
    <div class="px-4 py-8">
      <h2 class="text-sm text-gray-500 font-semibold tracking-wide mb-8">02 TESTIMONIALS</h2>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Testimonial 1 -->
        <div class="flex flex-col gap-6">
          <div class="flex-1">
            <svg class="w-10 h-10 text-black mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p class="text-gray-900 leading-relaxed text-base">
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
          <div class="flex gap-3 items-center pt-6 border-t border-gray-200">
            <NuxtImg
              src="/fabio-diso.png"
              width="48"
              height="48"
              alt="Portrait photo of Fabio Diso"
              loading="lazy"
              class="rounded-full w-12 h-12"
            />
            <div>
              <div class="font-semibold text-gray-900">Fabio Diso</div>
              <div class="text-sm text-gray-500">Product Owner</div>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="flex flex-col gap-6">
          <div class="flex-1">
            <svg class="w-10 h-10 text-black mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p class="text-gray-900 leading-relaxed text-base">
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
          <div class="flex gap-3 items-center pt-6 border-t border-gray-200">
            <NuxtImg
              src="/loup-dallier.png"
              width="48"
              height="48"
              alt="Portrait photo of Loup Dallier"
              loading="lazy"
              class="rounded-full w-12 h-12"
            />
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
