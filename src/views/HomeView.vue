<template>
  <div class="home-view">
    <CarouselComponent />
    <IntroduceComponent />
    <HistoryComponent />
    <TeamComponent />
  </div>
</template>

<script>
import CarouselComponent from "@/components/common/CarouselComponent.vue";
import HistoryComponent from "@/components/home-view/HistoryComponent.vue";
import IntroduceComponent from "@/components/home-view/IntroduceComponent.vue";
import TeamComponent from "@/components/home-view/TeamComponent.vue";

export default {
  name: "HomeView",
  components: {
    HistoryComponent,
    IntroduceComponent,
    TeamComponent,
    CarouselComponent,
  },
};
</script>
<style scoped>
.home-view {
}
</style>