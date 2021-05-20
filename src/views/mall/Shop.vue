<template>
  <div class="home">
    <c-layout>
      <c-header bg-w>
        <Launch />
        <Search />
      </c-header>
      <c-content>
        <c-row gutter="8" ph8 bg-w pv8>
          <template v-for="it in promotions" >
            <c-col span="6" :key="it.title">
              <c-magazine class="magazine" :image="it.image" radius6>
                <div class="magazine__item" fz18>{{ it.title }}</div>
              </c-magazine>
            </c-col>
          </template>
        </c-row>
        <Category :list="categoryList" bg-w mb5 />
        <Good :list="brandVideoList" />
      </c-content>
      <c-footer>
        <Menu />
      </c-footer>
    </c-layout>
  </div>
</template>

<script>
import {
  getRecommendatoryCategorys,
  getBanners,
  getBrandVideos,
  getPromotions,
} from '@/api/mall';
import Launch from '@/components/launch';
import Search from './Search';
import Carousel from './Carousel';
import Category from './Category';
import Good from './Good';
import Menu from './Menu';

export default {
  components: { Launch, Search, Carousel, Category, Good, Menu },
  data() {
    return {
      navList: ['首页', '商城', '直播', '我'],
      categoryList: [], //推荐类目
      bannerList: [], //轮播图
      brandVideoList: [], //所有品类视频列表
      promotions: [],
    };
  },
  async mounted() {
    const categoryList = await getRecommendatoryCategorys();
    this.categoryList = categoryList.data;
    const bannerList = await getBanners();
    this.bannerList = bannerList.data;
    const brandVideoList = await getBrandVideos();
    this.brandVideoList = brandVideoList.data[0].list;
    const promotions = await getPromotions();
    this.promotions = promotions.data;
    console.log(promotions.data);
  },
};
</script>

<style lang="scss" scoped>
@include b(magazine) {
  @include dimensions(82.5px);
  @include e(item) {
    position: absolute;
    bottom: 0.5em;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    color: white;
    font-size: 14px;
  }
}
</style>