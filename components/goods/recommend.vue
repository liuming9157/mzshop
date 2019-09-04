<template>
	<view class="recommend-content"> <text class="recommend-title">相似推荐</text>
		<view class="recommend-outer">
			<view v-for="(item,index) in list" :key="index" class="recommend-box" @click="detail(item)">
				<image class="recommend-img" :src="item.icon"></image>
				<text class="recommend-good-name">{{item.title}}</text>
				<view> <text class="recommend-price">{{item.price}}</text>
					<text class="recommend-oldPrice">{{item.oldPrice}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'recommend',
		props: {
			list: {}
		},
		methods: {
			detail() {}
		}
	}
</script>

<style>
	.recommend-content {
		display: flex;
		flex-direction: column;
		margin: 0upx 0upx 0upx 33upx;
		padding-bottom: 41upx;
	}

	.recommend-title {
		margin: 24.3upx 0upx;
		font-size: 31.3upx;
		color: #1a1a1a;
	}
	.recommend-outer{
		display: flex;
	}

	.recommend-box {
		display: flex;
		flex-direction: column;
		width: 216.7upx;
		margin: 0upx 16.3upx 0upx 0upx;
	}

	.recommend-img {
		height: 216.7upx;
		width: 216.7upx;
		border-radius: 8.3upx;
	}

	.recommend-good-name {
		margin: 14upx 0upx 4.7upx 0upx;
		font-size: 27.1upx;
		color: #1a1a1a;
	}

	.recommend-price {
		font-size: 20.8upx;
		color: #fa2a2d;
		margin: 0upx 10upx 0upx 0upx;
	}

	.recommend-oldPrice {
		color: #8d8d8d;
		font-size: 20.8upx;
	}
</style>
