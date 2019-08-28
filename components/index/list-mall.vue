<template>
	<view class="multi-container">
		<view class="multi-head" v-if="banner !== undefined">
			<view class="multi-head-left"> <text class="multi-topic">{{banner.title}}</text>
				<image class="multi-time" :src="banner.time_uri"></image>
			</view>
			<view class="multi-head-right" @click="press"> <text class="multi-link">{{banner.link}}</text>
				<image class="multi-arrow" src="../img/arrow.png"></image>
			</view>
		</view>
		<view class="multi-list" v-if="num === 1">
			<!-- 这里需要用户自行定义商品点击事件 -->
			<view v-for='(item,index) in list' :key='index' class="multi-product1" @click="detail()">
				<image class="multi-image" :src="item.uri"></image>
				<view class="multi-description"> <text class="multi-title">{{item.title}}</text> <text class="multi-subtitle">{{item.subtitle}}</text>
					<view> <text class="multi-specialprice">{{item.specialprice}}</text> <text class="multi-originprice">{{item.originprice}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="multi-list" v-if="num === 2">
			<!-- 这里需要用户自行定义商品点击事件 -->
			<view v-for='(item,index) in list' :key='index' class="multi-product2" @click="detail()">
				<image class="multi-image" :src="item.uri"></image>
				<view class="multi-description"> <text class="multi-title">{{item.title}}</text> <text class="multi-subtitle">{{item.subtitle}}</text>
					<view> <text class="multi-specialprice">{{item.specialprice}}</text> <text class="multi-originprice">{{item.originprice}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="multi-list" v-if="num === 3">
			<!-- 这里需要用户自行定义商品点击事件 -->
			<view v-for='(item,index) in list' :key='index' class="multi-product3" @click="detail()">
				<image class="multi-image" :src="item.uri"></image>
				<view class="multi-description"> <text class="multi-title">{{item.title}}</text> <text class="multi-subtitle">{{item.subtitle}}</text>
					<view> <text class="multi-specialprice">{{item.specialprice}}</text> <text class="multi-originprice">{{item.originprice}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="multi-list" v-if="num === 4">
			<!-- 这里需要用户自行定义商品点击事件 -->
			<view v-for='(item,index) in list' :key='index' class="multi-product4" @click="detail()">
				<image class="multi-image" :src="item.uri"></image>
				<view class="multi-description"> <text class="multi-title">{{item.title}}</text> <text class="multi-subtitle">{{item.subtitle}}</text>
					<view> <text class="multi-specialprice">{{item.specialprice}}</text> <text class="multi-originprice">{{item.originprice}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'list-mall',
		props: {
			banner: {},
			num: '',
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
	.multi-container {
		display: flex;
		flex-direction: column;
		width: 750upx;
	}

	.multi-head {
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		;
		margin: 24.3upx 33upx 23.3upx 33upx;
	}

	.multi-head-left {
		align-content: flex-end;
	}

	.multi-topic {
		color: #1A1A1A;
		font-size: 31.3upx;
		line-height: 40.6upx;
		margin-right: 30upx;
		align-self: center;
	}

	.multi-time {
		align-self: center;
	}

	.multi-head-right {
		align-content: center;
		align-items: flex-end;
	}

	.multi-link {
		color: #1A1A1A;
		opacity: 0.5;
		font-size: 27upx;
		margin-right: 14upx;
		align-self: center;
	}

	.multi-arrow {
		width: 16upx;
		height: 28upx;
		align-self: center;
	}

	.multi-list {
		border-color: #0000ff;
		flex-wrap: wrap;
		margin-left: 25upx;
		margin-right: 25upx;
	}

	.multi-image {
		margin: 0upx 8upx 16upx 8upx;
		border-radius: 8.3upx;
	}

	.multi-product1 {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: 39upx;
	}

	.multi-product2 {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin-bottom: 39upx;
	}

	.multi-product3 {
		display: flex;
		flex-direction: column;
		width: 33.3%;
		margin-bottom: 39upx;
	}

	.multi-product4 {
		display: flex;
		flex-direction: column;
		width: 25%;
		margin-bottom: 39upx;
	}

	.multi-description {
		display: flex;
		flex-direction: column;
	}

	.multi-title {
		color: #1A1A1A;
		font-size: 27.1upx;
		line-height: 34.9upx;
		margin-left: 8upx;
	}

	.multi-subtitle {
		color: #1A1A1A;
		opacity: 0.5;
		font-size: 20.8upx;
		line-height: 27.1upx;
		margin-left: 8upx;
	}

	.multi-specialprice {
		color: #fa2a2d;
		font-size: 20.8upx;
		line-height: 27.1upx;
		margin-left: 8upx;
	}

	.multi-originprice {
		color: #000000;
		opacity: 0.5;
		text-decoration: line-through;
		font-size: 20.8upx;
		line-height: 27.1upx;
		margin-left: 8upx;
	}
</style>
