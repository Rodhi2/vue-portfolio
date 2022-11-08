<template>
  <Header />
  <section
    class="bg-light py-5 d-flex justify-content-center align-items-center"
  >
    <div>
      <div class="d-flex justify-content-center">
        <img
          src="../assets/me.png"
          alt="me.jpg"
          class="rounded-circle"
        />
      </div>
      <h2 class="text-center mt-5">Rodhi Faisal Mufid</h2>
      <h5 class="text-center">Student at IIB Darmajaya, I'm a student intern of PT. Stechoq Robotika Indonesia, in the field of Software Engineer.</h5>
    </div>
  </section>
  <section class="bg-white py-5">
    <h2 class="text-center">About</h2>
    <p class="text-center">
      Hello, i am <strong>Mufid</strong>. i'm come from Negerikaton, Pesawaran
      <strong>i live in Bandar Lampung, </strong>Lampung, indonesia.
    </p>
    <p class="text-center">
      I am a <strong>Frontend Developer</strong>. My hobby is reading, writing, and traveling
    </p>
    <p class="text-center"><strong>2022.</strong></p>
  </section>
  <section class="bg-light py-5">
    <h2 class="text-center">Hobby</h2>
    <div class="container py-2">
      <div class="row">
        <div class="col-lg" v-for="project in projects">
          <RouterLink
            :to="'/detail/' + project.slug"
            class="text-decoration-none text-dark"
          >
            <div class="card">
              <img src="https://picsum.photos/200/300" class="card-img-top" />
              <div class="card-body">
                <h5 class="text-center text-capitalize">
                  {{ project.title }}
                </h5>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "../components/Header.vue";
import { RouterLink } from "vue-router";
import { useProjectStore } from "../stores/project";

const { projects } = useProjectStore();
</script>
