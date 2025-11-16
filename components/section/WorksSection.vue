<script setup lang="ts">
import SectionTemplate from "../SectionTemplate.vue";
</script>

<template>
  <SectionTemplate id="works">
    <h1 class="text-gray-500 font-semibold py-2 px-4">Works</h1>
    <div class="px-4 py-4 border-b border-dashed border-gray-200">
      <div class="flex gap-4 items-start justify-between">
        <div>
          <h1 class="text-xl font-semibold">Tech lead & Web Developer</h1>
          <p class="text-xl">Ringana</p>
        </div>
        <div>May 2024 - Present</div>
      </div>
      <p class="mt-4">
        As a Tech Lead, leading and collaborating with a team of 4 developers to build the e-commerce website of Ringana.
        <br />
        • Fixing over 100 bugs and improving the functionality of the website
        <br />
        • Improving developer experience by implementing proper typescript
      </p>
    </div>

    <div class="px-4 py-4 border-b border-dashed border-gray-200">
      <div class="flex gap-4 items-start justify-between">
        <div>
          <h1 class="text-xl font-semibold">Software Engineer</h1>
          <p class="text-xl">Barracuda</p>
        </div>
        <div>Nov 2023 - Apr 2024</div>
      </div>
      <p class="mt-4">
        Working on a firewall project at Barracuda Network, focusing on C++
        code. Responsibilities include fixing bug and improving the
        functionality of the NG Firewall.
      </p>
    </div>

    <div class="px-4 py-4 border-b border-dashed border-gray-200">
      <div class="flex gap-4 items-start justify-between">
        <div>
          <h1 class="text-xl font-semibold">Software Engineer</h1>
          <p class="text-xl">Mantu</p>
        </div>
        <div>Feb 2023 - Nov 2023</div>
      </div>
      <p class="mt-4">
        • Design, development and support of an internally developed product
        centralizing access rights to the company’s ERP
        <br />
        • Migrating a Vue2 application to Vue3 of over 200 components
      </p>
    </div>

    <div class="px-4 py-4 border-b border-dashed border-gray-200">
      <div class="flex gap-4 items-start justify-between">
        <div>
          <h1 class="text-xl font-semibold">YAKA - Programming Assistant</h1>
          <p class="text-xl">Epita</p>
        </div>
        <div>Feb 2022 - Jul 2022</div>
      </div>
      <p class="mt-4">
        Programming assistant (C++, SQL, java, JS) for more than 600 first year
        engineering students.
      </p>
    </div>

    <div class="px-4 py-4">
      <div class="flex gap-4 items-start justify-between">
        <div>
          <h1 class="text-xl font-semibold">Fullstack developer</h1>
          <p class="text-xl">Padoa</p>
        </div>
        <div>Sep 2021 - Jan 2022</div>
      </div>
      <p class="mt-4">
        • Working on the main PADOA application which is composed of a frontend
        in Angular 12 and a backend in NodeJS 14 with Express and PostgreSQL
        <br />
        • Optimization of the api: The import and export excel could cause the
        backend to crash if the file was to big because it consumed too much
        ram. Implementation of a worker system to perform heavy tasks outside
        the backend
        <br />
        • Redesign of the employee modification history system: When modifying,
        merging, or adding information to an employee’s record, we record the
        person who made the change. This involves a system of access to
        information, anonymization, and managing multi-company employees.
        <br />
        • UI: Redesign of all the filter selection interface of the angular
        application.
      </p>
    </div>
  </SectionTemplate>
</template>
