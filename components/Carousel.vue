<template>
  <div class="carousel">
    <div class="carousel-images">
      <img :src="images[currentImage]" alt="Carousel Image" />
    </div>
    <div class="carousel-controls">
      <button @click="prevImage" class="control-button">❮</button>
      <button @click="nextImage" class="control-button">❯</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '/images/home-carousel-img1.png';
import img2 from '/images/home-carousel-img2.png';
import img3 from '/images/home-carousel-img3.png';
import img4 from '/images/home-carousel-img4.png';
const currentImage = ref(0);

const images = ref([img1, img2, img3, img4]);

function nextImage() {
  currentImage.value = (currentImage.value + 1) % images.value.length;
}

function prevImage() {
  currentImage.value =
    (currentImage.value - 1 + images.value.length) % images.value.length;
}
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  width: 100%;
  margin: 0 auto;

  &-images {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  &-controls {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 55%;
    width: 100%;
    transform: translateY(-50%);
    @media (min-width: 768px) {
      top: 50%;
    }
    .control-button {
      background: rgba(0, 0, 0, 0.075);
      border: none;
      color: rgb(143 93 15);
      font-size: 2rem;
      padding: 10px;
      cursor: pointer;
      transition: background 0.5s ease;

      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
}
</style>
