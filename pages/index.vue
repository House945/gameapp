<template>
  <div class="home">
    <!-- Hero -->
    <HeroView />

    <!-- Movies -->
    <div class="container movies">
      <div id="movie-grid" class="movies-grid">
        <div v-for="(game, index) in games" :key="index" class="movie">
          <div class="movie-img">
            <img
              :src="`https://www.freetogame.com/g/${game.id}/thumbnail.jpg`"
              alt=""
            />
            <p class="review">{{ game.platform }}</p>
            <p class="overview">{{ game.short_description }}</p>
          </div>
          <div class="info">
            <p class="title">
              {{ game.title.slice(0.25)
              }}<span v-if="game.title.length > 25">...</span>
            </p>
            <p class="release">
              Released:
              {{
                new Date(game.release_date).toLocaleString('en-us', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </p>
            <NuxtLink
              class="button button-light"
              :to="{ name: 'movies-movieid', params: { movieid: game.id } }"
              >Get More Info</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>

    <!-- <button @click="showImages()">Click to get images</button>
    <div v-if="images.length" class="img">
      <div v-for="image in images" :key="image">
        <img :src="image.download_url" />
      </div>
    </div>
    <div v-else>No images yet</div> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      games: [],
      // wheather: [],
      // images: [],
    }
  },
  async fetch() {
    this.games = await this.$gamesApi.getGames({})
    console.log(this.games)

    //   this.wheather = await this.$wheatherApi.getWheatherForHubert({
    //     q: 'Krakow',
    //   })
    //   console.log(this.wheather.list[1].temp.average - 273.15)
    //   this.images = await this.$imagesApi.getImagesForTbz({
    //     width: 200,
    //     height: 200,
    //   })
    // },
    // methods: {
    //   showImages() {
    //     if (!this.images === []) return this.images
    //   },
    // },
  },
}
</script>

<style lang="scss">
.home {
  .loading {
    padding-top: 120px;
    align-items: flex-start;
  }
  .search {
    display: flex;
    padding: 32px 16px;
    input {
      max-width: 350px;
      width: 100%;
      padding: 12px 6px;
      font-size: 14px;
      border: none;
      &:focus {
        outline: none;
      }
    }
    .button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .movies {
    padding: 32px 16px;
    .movies-grid {
      display: grid;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }
      .movie {
        position: relative;
        display: flex;
        flex-direction: column;
        .movie-img {
          position: relative;
          overflow: hidden;
          &:hover {
            .overview {
              transform: translateY(0);
            }
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
          .review {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 5rem;
            height: 45px;
            background-color: #c92502;
            color: #fff;
            border-radius: 0 0 16px 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .overview {
            line-height: 1.5;
            position: absolute;
            bottom: 0;
            background-color: rgba(201, 38, 2, 0.9);
            padding: 12px;
            color: #fff;
            transform: translateY(100%);
            transition: 0.3s ease-in-out all;
          }
        }
        .info {
          margin-top: auto;
          .title {
            margin-top: 8px;
            color: #fff;
            font-size: 20px;
          }
          .release {
            margin-top: 8px;
            color: #c9c9c9;
          }
          .button {
            margin-top: 8px;
          }
        }
      }
    }
  }
}
</style>
