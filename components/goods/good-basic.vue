<template>
	<view class="malldetail-flex-h">
		<!-- 首页滑动banner -->
		<view class="malldetail-flex-h">
			<swiper autoplay="true" class="swiper" :indicator="true">
				<swiper-item v-for="(item,index) in basicdata.goodImgList" :key='index'>
					<image class="image" :src="item.url"></image>
				</swiper-item>
			</swiper>
		</view>
		<view> <text class="malldetail-price">￥{{basicdata.goodPrice}}</text> <text class="malldetail-oldPrice">单买价￥{{basicdata.goodOldPrice}}</text>
		</view> <text class="malldetail-good-name">{{basicdata.goodName}}</text>
		<view class="malldetail-black"></view>
		<view class="malldetail-free">
			<text class="malldetail-free-title">优惠券</text>
			<text class="malldetail-free-detail">{{basicdata.goodFree}}</text>
			<text class="malldetail-free-btn" @click="getFree">领取</text>
			<image class="malldetail-free-img" @click="getFree" src="/static/arrow.png"></image>
		</view> <text class="malldetail-free-tips">{{basicdata.goodFreeDetail}}</text>
		<view class="malldetail-black"></view>
	</view>
</template>

<script>
	export default {
		name: 'good-basic',
		props: {
			basicdata: {}
		}
	}
</script>

<style>
	.malldetail-flex-h {
		display: flex;
		flex-direction: column;
	}

	.swiper {
		width: 750upx;
		height: 750upx;
		display: flex;
		flex-direction: column;
		indicator-selected-color: rgba(255, 255, 255, 1);
		indicator-color: rgba(255, 255, 255, 0.5);
		indicator-size: 12.5upx;
	}

	.image {
		width: 750upx;
		height: 750upx;
	}

	.malldetail-price {
		margin: 33.3upx 10upx 0upx 33upx;
		color: #fa2a2d;
		font-size: 37.5upx;
	}

	.malldetail-oldPrice {
		margin: 45upx 0upx 0upx 0upx;
		color: #808080;
		text-decoration: line-through;
		font-size: 20.8upx;
	}

	.malldetail-good-name {
		margin: 19.8upx 33upx 33.9upx 33upx;
		color: #1a1a1a;
		font-size: 37.5upx;
	}

	.malldetail-black {
		height: 17upx;
		background-color: #f2f2f2;
	}

	.malldetail-free {
		display: flex;
		margin: 0upx 33upx;
		padding: 29.2upx 0upx;
		align-items: center;
		border-color: #cccccc;
		border-bottom-width: 0.5upx;
	}

	.malldetail-free-title {
		padding: 0upx 10upx;
		margin: 0upx 16.7upx 0upx 0upx;
		color: #ff7500;
		border-radius: 4.2upx;
		border: 1upx solid #ff7500;
		font-size: 20.8upx;
	}

	.malldetail-free-detail {
		flex: 1;
		color: #1a1a1a;
		font-size: 31.3upx;
	}

	.malldetail-free-btn {
		padding: 0upx 9upx 0upx 0upx;
		font-size: 27.1upx;
		color: #808080;
	}

	.malldetail-free-img {
		width: 16upx;
		height: 28upx;
	}

	.malldetail-free-tips {
		margin: 29.2upx 33upx;
		font-size: 31.3upx;
		color: #1a1a1a;
	}
</style>
</style>
