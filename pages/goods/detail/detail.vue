<template>
	<view>
		<good-basic :basicdata='gooddata.goodbasic'></good-basic>
		<specfic :specficdata='gooddata.specficlist'></specfic>
		<view class="malldetail-black"></view>
		<comment :commentdata='gooddata.comment'></comment>
		<view class="malldetail-black"></view>
		<recommend :list='gooddata.recommendgood'></recommend>
		<view class="malldetail-black"></view>
		<introduce :list='gooddata.goodintroduced'></introduce>
		<view class="malldetail-black"></view>
		<view class="malldetail-imgdetail-title">图文详情</view>
		<image v-for="(item,index) in gooddata.goodbasic.goodImgList" :key='index' class="malldetail-imgdetail-img" :src="item.url"></image>
		<view class="malldetail-black"></view>
		<view class="malldetail-imgdetail-title">{{gooddata.notes.title}}</view>
		<view class="malldetail-flex-h" v-for="(item,index) in gooddata.notes.detail" :key='index'>
			<text class="malldetail-return-title">{{item.title}}</text>
			<text class="malldetail-return-detail">{{item.detail}}</text>
		</view>
		<view class="blank"></view>
		<good-action></good-action>
	</view>
</template>

<script>
	import goodBasic from '@/components/goods/good-basic.vue'
	import goodAction from '@/components/goods/good-action.vue'
	import specfic from '@/components/goods/specfic.vue'
	import comment from '@/components/goods/comment.vue'
	import recommend from '@/components/goods/recommend.vue'
	import introduce from '@/components/goods/introduce.vue'
	import mockData from '@/data/good.js'
	export default {
		components: {
			goodBasic,
			goodAction,
			specfic,
			comment,
			recommend,
			introduce
		},
		data() {
			return {
				gooddata: {}
			}
		},
		onLoad() {
			this.gooddata = mockData.data
		}
	}
</script>

<style lang="scss">
	.malldetail-black {
		height: 17upx;
		background-color: #f2f2f2;
	}

	.malldetail-flex-h {
		display: flex;
		flex-direction: column;
	}

	.malldetail-imgdetail-title {
		margin: 24.3upx 33upx 33upx 24.3upx;
		font-size: 31.3upx;
		color: #1a1a1a;
	}

	.malldetail-imgdetail-img {
		width: 750upx;
		height: 1207upx;
	}

	.malldetail-return-title {
		margin: 0upx 33upx 7.5upx 33upx;
		font-size: 31.3upx;
		color: #1a1a1a;
	}

	.malldetail-return-detail {
		margin: 0upx 33upx 32.8upx 33upx;
		color: #808080;
		font-size: 27.1upx;
	}

	.blank {
		height: 100upx;
	}
</style>
