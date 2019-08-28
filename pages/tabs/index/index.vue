<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for='(item,index) in swiperList' :key='index' >
				<image :src="item.image"></image>
			</swiper-item>	
		</swiper>
		<!-- 第一个item-container -->
		<item-container></item-container>
		<!-- 第二个item-container -->
		<item-container></item-container>
		<!-- 第三个item-container -->
		<item-container></item-container>
		<!-- 第一个list-mall -->
		<list-mall></list-mall>
		<!-- 第二个list-mall -->
		<list-mall></list-mall>
		<!-- 第一个sola -->
		<sola></sola>
		<!-- 第二个sola -->
		<sola></sola>
	</view>
</template>

<script>
	import itemContainer from '@/components/index/item-container.vue'
	import listMall from '@/components/index/list-mall.vue'
	import sola from '@/components/index/sola.vue'
	export default {
		components:{itemContainer,listMall,sola},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
