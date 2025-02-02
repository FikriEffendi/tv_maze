<template>
  <div class="py-4">
    <div class="my-4 text-2xl font-bold text-center">List Of People</div>
    <div class="flex px-2 gap-2">
      <div class="basis-4/5 space-y-2">
        <template v-for="(group, letter) in groupedPeople" :key="letter">
          <div>
            <!-- Menampilkan huruf abjad -->
            <div
              ref="alphabetRefs"
              :data-letter="letter"
              class="p-2 font-bold text-center uppercase bg-green-100 rounded shadow"
            >
              {{ letter }}
            </div>

            <div class="grid grid-cols-4 gap-4 my-2">
              <!-- Menampilkan daftar orang berdasarkan huruf abjad -->
              <template v-for="person in group" :key="person.id">
                <div>
                  <app-image
                    v-if="person.image && person.image.original"
                    :src="person.image.original"
                    :alt="person.name"
                  />
                  <div v-else class="p-2 text-center text-red-500 bg-red-100">
                    No Image Available
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div class="rounded bg-green-100 fixed right-2 w-1/6">
        <div class="grid grid-cols-5 place-items-center py-2">
          <template v-for="letter in letters" :key="letter">
            <div
              :class="{
                'text-blue-500': letter === activeLetter,
              }"
              class="text-xl font-bold"
            >
              {{ letter }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { computed, onMounted, ref } from "vue";
import AppImage from "@/components/app-image.vue";

const api = useApi();

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Data people
const people = ref([]);

// Fungsi untuk mendapatkan data dari API
const getData = async () => {
  try {
    const response = await api.GET("people");

    // Set nilai `people` dengan data dari API
    people.value = response;
  } catch (error) {
    console.error("Error fetching people:", error);
  }
};

// Mengelompokkan orang berdasarkan huruf pertama nama mereka
const groupedPeople = computed(() => {
  const groups = {};
  people.value
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((person) => {
      const firstLetter = person.name.charAt(0).toUpperCase();

      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(person);
    });
  return groups;
});

//State untuk huruf aktif
const activeLetter = ref("A");

//Refs untuk setiap grup
const groupRefs = ref([]);

//Fungsi untuk mengatur Intersection Observer
const observeGroups = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSections = entries.filter((entry) => entry.isIntersecting);

      if (visibleSections.length > 0) {
        let firstVisibleLetter = visibleSections[0].target.dataset.letter;

        //update activeLetter hanya jika berbeda
        if (firstVisibleLetter.length > 0) {
          activeLetter.value = firstVisibleLetter;
        }
      }
    },
    {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: [0.1, 0.5, 0.8],
    }
  );

  //Observe setiap grup
  groupRefs.value.forEach((group) => {
    observer.observe(group);
  });
};

//Fungsi untuk menangani perubahan scroll manual
const handleScroll = () => {
  let foundLetter = activeLetter.value; //Menggunakan nilai saat ini sebagai default
  let closestElement = null;
  let closestDistance = Infinity;

  for (const group of groupRefs.value) {
    const rect = group.getBoundingClientRect();

    //Cari element yang paling dekat ke atas viewport
    let distance = Math.abs(rect.top);
    if (distance < closestDistance && rect.top <= window.innerHeight / 3) {
      closestDistance = distance;
      closestElement = group;
    }
  }

  if (closestElement) {
    foundLetter = closestElement.dataset.letter;
  } else {
    //Jika tidak ada element lain yang terlihat, reset ke 'A'
    const firstGroup = groupRefs.value[0];
    if (firstGroup && firstGroup.getBoundingClientRect().top > 0) {
      foundLetter = "A";
    }
  }

  //Hanya ubah jika berbeda dari sebelumnya
  if (foundLetter !== activeLetter.value) {
    activeLetter.value = foundLetter;
  }
};

//fungsi debounce agar scroll tidak terlalu cepat mengubah nilai
let scrollTimeout;
const debouncedScroll = () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(handleScroll, 50);
};

//Memanggil fungsi `getData` saat komponen dipasang
onMounted(async () => {
  await getData();

  //Tambahkan refs ke elemen grup
  groupRefs.value = document.querySelectorAll("[data-letter]");
  observeGroups();

  window.addEventListener("scroll", debouncedScroll);
});
</script>

<style lang="scss" scoped></style>
