<template>
  <div class="recherche">
    <h2>Résultats des films les populaires </h2>
    <md-table>
      <md-table-row v-for="unFilm in films" v-bind:key="unFilm.key">
        <md-table-cell>{{unFilm.title}}</md-table-cell>
        <md-table-cell>{{unFilm.overview}}</md-table-cell>
        <md-table-cell>{{unFilm.vote_count}}</md-table-cell>
        <md-table-cell v-if="unFilm.poster_path!=null">
          <img v-bind:src="'http://image.tmdb.org/t/p/w500' +unFilm.poster_path" width='100px'></md-table-cell>
        <md-table-cell><md-button v-on:click="voirDetails(unFilm)"><md-icon>visibility</md-icon></md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios'

@Component
export default class FilmPopulaire extends Vue {
  baseUrl = 'https://api.themoviedb.org/3/movie/popular';
  films = [];
  uneRecherche = '';
  api_key =  '4ff72c4b1b8d4ccf3356dd8ef034a6ce';


  async recherche() {
    //const response = await axios.get(this.baseUrl + `/search.json?title=${this.query}`);
    const response = await axios.get(this.baseUrl +'?api_key='+this.api_key+'&query=' );
    this.films = await response.data.results;
  }
  mounted(){
    this.recherche();
  }

  voirDetails(film: any) {
    this.$router.push({ path: 'details', query: {
        id: film.id,
        titre: film.title
      }});
  }

}
</script>

<style>
.input-group {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.input-group-field {
  margin-right: 0;
}

.input-group .input-group-button {
  margin-left: 0;
  border: none;
}

.input-group .md-raised {
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
}
.photo1{
  background-image:url("photo.jpg");
  filter: blur(4px);
}
</style>
