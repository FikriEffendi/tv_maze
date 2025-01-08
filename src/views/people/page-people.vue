<template>
  <div class="py-4">
    <div class="my-4 text-2xl font-bold text-center">List Of People</div>
    <div class="flex px-2 gap-2">
      <div class="flex-1 space-y-2">
        <template v-for="(group, letter) in groupedPeople" :key="letter">
          <div>
            <!-- Menampilkan huruf abjad -->
            <div class="p-2 font-bold text-center uppercase bg-green-100 rounded shadow">
              {{ letter }}
            </div>

            <div class="grid grid-cols-4 gap-4">
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
      <div class="h-full basis-1/5 bg-zinc-500 rounded">
        <div class="grid grid-cols-5 place-items-center py-2">
          <template v-for="letter in letters" :key="letter">
            <div class="text-xl font-bold">{{ letter }}</div>
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

//Memanggil fungsi `getData` saat komponen dipasang
onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped></style>
