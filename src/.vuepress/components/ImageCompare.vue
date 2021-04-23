<template>
  <div class="compare-container">
    <!-- <div v-if="active == 'left'">
      <a :href="leftUrl" target="_blank">
        <img class="image" :src="leftUrl" />
      </a>
    </div>
    <div v-if="active == 'right'">
      <a :href="rightUrl" target="_blank">
        <img class="image" :src="rightUrl" />
      </a>
    </div> -->

    <div class="image-container" :style="{ maxWidth: '100%'}">
      <VueCompareImage :sliderPositionPercentage="0.2" leftLabel="Antes" :leftImage="$withBase(leftUrl)" rightLabel="Despues" :rightImage="$withBase(rightUrl)" />
    </div>

    <div class="tab">
      <a class="tablinks left-one" :href="$withBase(leftUrl)" target="_blank">Link&nbsp;↪</a>
      <div class="filler">{{description}}</div>
      <a class="tablinks right-one" :href="$withBase(rightUrl)" target="_blank">Link&nbsp;↪</a>
    </div>
  </div>
</template>

<script>
import VueCompareImage from "vue-compare-image";

export default {
  props: ["leftUrl", "rightUrl", "description"],
  data() {
    return {

    };
  },
  components: { VueCompareImage },
};
</script>

<style lang="stylus" scoped>
.tab {
  overflow: hidden;
  padding: 6px 0px 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .filler{
    width: 100%;
    // padding: 5px 20px 0px;
    font-style: italic;
    padding: 0px 9% 0px;
    text-align:center;
    // font-size: 12px;
  }
  font-size: 0.85rem;
  .left-one{
    padding-left: 0;
  }
  .right-one{
    padding-right: 0;
  }
}

.image-container{
  border: 1px solid $textColor;
}
.image{
  width: 100%;
  height: auto;
}

.tab a {
  cursor: pointer;
  transition: 0.1s;
  color: $textColor;
}

</style>
