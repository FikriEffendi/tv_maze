<template>
  <div class="container p-4 mx-auto">
    <form
      @submit.prevent="recommendShows"
      action=""
      class="max-w-lg mx-auto space-y-4"
    >
      <div v-for="(field, index) in dynamicFields" :key="index" class="mb-4">
        <label class="block text-sm font-medium text-gray-700" for="">{{
          field.label
        }}</label>
        <input
          v-model="field.value"
          :type="field.type"
          class="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
          :placeholder="field.placeholder"
        />
      </div>
      <button
        type="submit"
        class="w-full py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
      >
        Get Recommendation
      </button>
    </form>

    <div v-if="recommendations.length" class="m-8">
      <div class="text-2xl">Recommendation Shows</div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          v-for="show in recommendations"
          :key="show.id"
          class="overflow-hidden bg-white rounded-lg shadow-md"
        >
          <img
            :src="show.image?.medium || 'https://via.placeholder.com/300x450'"
            :alt="show.name"
          />
          <div class="text-sm text-gray-600">
            <p>Genres: {{ show.genres.join(", ") }}</p>
            <p>Rating: {{ show.rating?.average || "N/A" }}</p>
            <p>Status: {{ show.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dynamicFields = ref([
  {
    label: "Prefered Genres",
    value: "",
    type: "text",
    placeholder: "Enter Genre (coma-separated)",
  },
  {
    label: "Show Type",
    value: "",
    type: "text",
    placeholder: "Scripted, Reality, etc",
  },
  {
    label: "Minimum Rating",
    value: "",
    type: "text",
    placeholder: "Enter minimum rating",
  },
  {
    label: "Status",
    value: "",
    type: "text",
    placeholder: "Running, Ended, etc",
  },
  {
    label: "Synopsis Keywords",
    value: "",
    type: "text",
    placeholder: "Enter keyword describing your preferred story",
  },
]);

const recommendations = ref([]);

const createFeatureExtractor = (userPreferences) => {
  return (show) => {
    const features = [];

    //Genre Matching
    const genreMatch =
      userPreferences.genre.length > 0
        ? userPreferences.genres.some((genre) => {
            show.genres.some((showGenre) => {
              showGenre.toLowerCase().includes(genre.toLowerCase());
            });
          })
        : false;

    //Type Matching
    const typeMatch = userPreferences.type
      ? show.type.toLowerCase() === userPreferences.type.toLowerCase()
      : false;

    //Rating Matching
    const ratingMatch = userPreferences.rating
      ? (show.rating?.average || 0) >= parseFloat(userPreferences.rating)
      : false;

    //Status Matching
    const statusMatch = userPreferences.status
      ? show.status.toLowerCase() === userPreferences.status.toLowerCase()
      : false;

    //Synopsis Keyword Matching
    const synopsisMatch = userPreferences.synopsis
      ? userPreferences.synopsis
          .toLowerCase()
          .split(",")
          .some((keyword) => {
            show.summary?.toLowerCase().includes(keyword.trim());
          })
      : false;

    //Normalize and convert to tensor-friendly features
    features.push(
      genreMatch ? 1.0 : 0.0,
      typeMatch ? 1.0 : 0.0,
      ratingMatch ? 1.0 : 0.0,
      statusMatch ? 1.0 : 0.0,
      synopsisMatch ? 1.0 : 0.0,
      show.rating?.average || 0, //Raw rating
      show.runtime || 0 //Runtime
    );

    return features;
  };
};

const recommendShows = () => {};
</script>

<style lang="scss" scoped></style>
