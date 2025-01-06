<template>
  <div class="p-4">
    <div class="text-2xl font-bold text-center my-4">List Of People</div>
    <div class="space-y-2">
      <template v-for="(group, letter) in groupedPeople" :key="letter">
        <div>
          <!-- Menampilkan huruf abjad -->
          <div class="p-2 bg-green-100 font-bold rounded shadow text-center uppercase">
            {{ letter }}
          </div>

          <!-- Menampilkan daftar orang berdasarkan huruf abjad -->
          <div
            v-for="person in group"
            :key="person.id"
            class="p-2 bg-gray-100 rounded shadow hover:bg-gray-200"
          >
            {{ person.name }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { computed, onMounted, ref } from "vue";

const api = useApi();

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
