<template>
	<view class="wrapper">
		<view class="sola-head" v-if="banner !== undefined">
			<view class="sola-head-left"> <text class="sola-topic">{{banner.title}}</text>
				<image class="sola-time" :src="banner.time_uri"></image>
			</view> <!-- @click 自定义点击“更多”跳转页面信息 -->
			<view class="sola-head-right" @click="press"> <text class="sola-link">{{banner.link}}</text>
				<image class="sola-arrow" :src="banner.arrow_uri"></image>
			</view>
		</view>
		<view class="sola-list">
			<!-- @click 自行定义点击商品跳转页面信息 -->
			<view v-for="(item,index) in list" :key='index' class="sola-product" @click="detail">
				<image class="sola-image" :src="item.uri"></image> <text class="sola-title">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'sola',
		props: {
			banner: {},
			list: {
				type: Array,
				deault: function() {
					return []
				}
			}
		}
	}
</script>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 750upx;
	}

	.sola-head {
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		margin: 31upx 33upx 31upx 33upx;
	}

	.sola-head-left {
		align-content: flex-end;
		align-items: center;
	}

	.sola-topic {
		color: #1A1A1A;
		font-size: 31.3upx;
		line-height: 40.6upx;
		margin-right: 30upx;
		align-self: center;
	}

	.sola-time {
		align-self: center;
	}

	.sola-head-right {
		align-content: center;
		align-items: flex-end;
	}

	.sola-link {
		color: #8D8D8D;
		font-size: 27.1upx;
		margin-right: 9upx;
		align-self: center;
	}

	.sola-arrow {
		height: 27.1upx;
		align-self: center;
	}

	.sola-list {
		border-color: #0000ff;
		flex-wrap: wrap;
		margin: 0upx 33upx 12upx 33upx;
	}

	.sola-product {
		display: flex;
		width: 100%;
		height: 363upx;
		flex-direction: column;
		border-radius: 8upx;
		background-color: #f2f2f2;
		margin-bottom: 17upx;
	}

	.sola-image {
		border-top-left-radius: 8upx;
		border-top-right-radius: 8upx;
		margin-bottom: 17upx;
	}

	.sola-title {
		color: #1A1A1A;
		font-size: 27.1upx;
		line-height: 34.9upx;
		margin-left: 15upx;
	}
</style>
