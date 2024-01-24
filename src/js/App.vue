<script setup>
import { ref } from 'vue'
import Loading from "./Loading.vue";
import axios from 'axios';

const teacherNames = ref([]);
const getter = ref([]);
const finalScores = ref([]);
const isLoading = ref(true);
const selected = ref();

axios.get("https://localhost:7253/api/Getter").then(data => {
    getter.value = data.data;
	teacherNames.value = [...new Set(data.data.map(teacher => teacher.nev))];
});

axios.get("https://localhost:7253/api/Végsőpont").then(data => {
    finalScores.value = data.data;
	isLoading.value = false;
});
</script>

<template>
  <v-app>
    <Loading v-if="isLoading"></Loading>
    <v-container>
      <v-select
        label="Tanár"
        :items="teacherNames"
        v-model="selected"
        return-object
      ></v-select>

      <v-table v-if="selected !== undefined">
        <thead>
          <tr>
            <th class="font-weight-black">
              Szempont neve
            </th>
            <th class="font-weight-black text-center">
              Pontérték
            </th>
            <th class="font-weight-black text-center">
              Szorzó
            </th>
            <th class="font-weight-black text-center">
              Végső pontszám
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in getter"
            :key="item.szempontNev"
          >
            <template v-if="selected === item.nev">
              <td>{{ item.szempontNev.replace("-", " ") }}</td>
              <td class="text-center">{{ item.pontertek }}</td>
              <td class="text-center">{{ item.szorzo }}</td>
              <td class="text-center">{{ item.végsőPont }}</td>
            </template>
          </tr>
        </tbody>
      </v-table>

      <div v-if="selected !== undefined">
        <h3 class="text-center pt-5">{{ selected }} összesített pontszáma:
			<template v-for="score in finalScores" :key="score.nev">
			  <template v-if="selected === score.nev">
				{{ score.végsőPont1 }}
			  </template>
			</template>
		</h3>
      </div>
    </v-container>
  </v-app>
</template>