<template>
	<view>
		<view class="fixed-container">
			<view class="fixed-head1">
				<view class="fixed-head-left"> <text class="fixed-main-title">{{banner.title}}</text> </view>
				<view class="fixed-head-right" v-if="banner.subtitle === undefined" @click="showAllProducts"> <text class="fixed-link">{{banner.link}}</text>
					<image class="fixed-arrow" src="/static/arrow.png"></image>
				</view>
			</view>
			<view class="fixed-head2" v-if="banner.subtitle !== undefined">
				<view class="fixed-head-left"> <text class="fixed-sub-title">{{banner.subtitle}}</text> </view>
				<view class="fixed-head-right" @click="showAllProducts"> <text class="fixed-link" @click="toPageNew">{{banner.link}}</text>
					<image class="fixed-arrow" src="/static/arrow.png"></image>
				</view>
			</view>
			<view class="fixed-list" v-if="num === 2">
				<view v-for='(item,index) in list' :key='index' class="fixed-product2" @click="detail()">
					<image class="fixed-image2" :src='item.uri'></image>
					<view class="fixed-title">{{item.title}}</view>
					<view class="fixed-subtitle">{{item.subtitle}}</view>
				</view>
			</view>
			<view class="fixed-list" v-if="num === 3">
				<view v-for='(item,index) in list' :key='index' class="fixed-product3" @click="detail()">
					<image class="fixed-image3" :src='item.uri'></image>
					<view class="fixed-title">{{item.title}}</view>
					<view class="fixed-subtitle">{{item.subtitle}}</view>
				</view>
			</view>
			<view class="fixed-list" v-if="num === 4">
				<view v-for='(item,index) in list' :key='index' class="fixed-product4" @click="detail()">
					<image class="fixed-image4" :src='item.uri'></image>
					<view class="fixed-title">{{item.title}}</view>
					<view class="fixed-subtitle4">{{item.subtitle}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'item-container',
		props: {
			banner: {},
			num: '',
			list: {
				type: Array,
				deault: function() {
					return []
				}
			}
		},
		methods:{
			detail(){
				this.$jump('/pages/goods/detail/detail')
			}
		}
	}
</script>
<style>
	.fixed-container {
		margin: 20upx 30upx;
	}

	.fixed-head1 {
		display: flex;
		justify-content: space-between;
		align-content: center;

	}

	.fixed-head2 {
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: flex-end;
	}

	.fixed-head-left {
		align-items: center;
	}

	.fixed-main-title {
		color: #1A1A1A;
		font-size: 31upx;
	}

	.fixed-head-right {
		align-items: center;
	}

	.fixed-sub-title {
		color: #8D8D8D;
		font-size: 27upx;
	}

	.fixed-link {
		color: #8D8D8D;
		font-size: 27upx;
		margin-right: 14upx;
	}

	.fixed-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 25upx;
	}

	.fixed-arrow {
		height: 28upx;
		width: 16upx;
		align-self: center;
		resize-mode: contain;
	}

	.fixed-product2 {
		width: 333.3upx;
		flex-direction: column;
		border-radius: 8upx;
		background-color: #f2f2f2;

	}

	.fixed-image2 {
		border-top-left-radius: 8upx;
		border-top-right-radius: 8upx;
		width: 333.3upx;
		height: 188upx;
		margin-bottom: 8upx;
	}

	.fixed-product3 {
		width: 217upx;
		flex-direction: column;
		border-radius: 8upx;
		background-color: #f2f2f2;

	}

	.fixed-image3 {
		border-top-left-radius: 8upx;
		border-top-right-radius: 8upx;
		width: 217upx;
		height: 217upx;
		margin-bottom: 8upx;
	}

	.fixed-product4 {
		width: 158upx;
		flex-direction: column;
		border-radius: 8upx;
		background-color: #f2f2f2;

	}

	.fixed-image4 {
		border-top-left-radius: 8upx;
		border-top-right-radius: 8upx;
		width: 158upx;
		height: 160upx;
		margin-bottom: 8upx;
	}

	.fixed-title {
		color: #1A1A1A;
		font-size: 27upx;
		margin-left: 18upx;
	}

	.fixed-subtitle {
		color: #8d8d8d;
		font-size: 21upx;
		margin-left: 18upx;
		margin-bottom: 8.1upx;
	}

	.fixed-subtitle4 {
		color: #8d8d8d;
		font-size: 21upx;
		margin-left: 18upx;
		margin-bottom: 15.9upx;
	}
</style>
