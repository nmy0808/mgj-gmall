<template>
  <div class="home">
    <c-layout>
      <c-header bg-w>
        <Launch />
        <Search />
      </c-header>
      <c-content>
        <Carousel :list="bannerList" bg-w/>
        <Category :list="categoryList" bg-w mb5/>
        <Good :list="brandVideoList"  />
      </c-content>
      <c-footer>
        <Menu/>
      </c-footer>
    </c-layout>
  </div>
</template>

<script>
import {
  getRecommendatoryCategorys,
  getBanners,
  getBrandVideos,
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
    };
  },
  async mounted() {
    const categoryList = await getRecommendatoryCategorys();
    this.categoryList = categoryList.data;
    const bannerList = await getBanners();
    this.bannerList = bannerList.data;
    const brandVideoList = await getBrandVideos();
    this.brandVideoList = brandVideoList.data[0].list;
  },
};
</script>

<style>
</style>