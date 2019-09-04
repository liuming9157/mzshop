<template>
	<view class="multi-container">
		<view class="multi-head" v-if="banner !== undefined">
			<view class="multi-head-left"> <text class="multi-topic">{{banner.title}}</text>
			</view>
			<view class="multi-head-right" @click="press"> <text class="multi-link">{{banner.link}}</text>
				<image class="multi-arrow" src="/static/arrow.png"></image>
			</view>
		</view>
		<view class="multi-list" v-if="num === 1">
			<!-- 这里需要用户自行定义商品点击事件 -->
			<view v-for='(item,index) in list' :key='index' class="multi-product1" @click="detail()">
				<image class="multi-image1" :src="item.uri"></image>
				<view class="multi-description"> <text class="multi-title">{{item.title}}</text> <text class="multi-subtitle">{{item.subtitle}}</text>
					<view> <text class="multi-specialprice">{{item.specialprice}}</text> <text class="multi-originprice">{{item.originprice}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="multi-list" v-if="num === 2">
			<!-- 这里需要用户自行定义商品点击事件 -->
			<view v-for='(item,index) in list' :key='index' class="multi-product2" @click="detail()">
				<image class="multi-image2" :src="item.uri"></image>
				<view class="multi-description"> <text class="multi-title">{{item.title}}</text> <text class="multi-subtitle">{{item.subtitle}}</text>
					<view> <text class="multi-specialprice">{{item.specialprice}}</text> <text class="multi-originprice">{{item.originprice}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="multi-list" v-if="num === 3">
			<!-- 这里需要用户自行定义商品点击事件 -->
			<view v-for='(item,index) in list' :key='index' class="multi-product3" @click="detail()">
				<image class="multi-image3" :src="item.uri"></image>
				<view class="multi-description"> <text class="multi-title">{{item.title}}</text> <text class="multi-subtitle">{{item.subtitle}}</text>
					<view> <text class="multi-specialprice">{{item.specialprice}}</text> <text class="multi-originprice">{{item.originprice}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="multi-list" v-if="num === 4">
			<!-- 这里需要用户自行定义商品点击事件 -->
			<view v-for='(item,index) in list' :key='index' class="multi-product4" @click="detail()">
				<image class="multi-image4" :src="item.uri"></image>
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
		},
		methods:{
			detail(){
				this.$jump('/pages/goods/detail/detail')
			}
		}
	}
</script>

<style lang="scss">
	.multi-container {
		display: flex;
		flex-direction: column;
		width: 750upx;

		.multi-head {
			display: flex;
			justify-content: space-between;
			align-content: center;
			align-items: center;
			margin: 24.3upx 30upx 23.3upx 30upx;

			.multi-head-left {
				display: flex;
				align-content: flex-end;

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
			}



			.multi-head-right {
				display: flex;
				align-content: center;
				align-items: flex-end;

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
			}

		}
	}


	.multi-list {
		display: flex;
		border-color: #0000ff;
		flex-wrap: wrap;
		margin-left: 25upx;
		margin-right: 25upx;

		.multi-product1 {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin-bottom: 39upx;

			.multi-image1 {
				border-top-left-radius: 8upx;
				border-top-right-radius: 8upx;
				width: 690upx;
				height: 350upx;
				margin-bottom: 8upx;
			}
		}

		.multi-product2 {
			display: flex;
			flex-direction: column;
			width: 50%;
			margin-bottom: 39upx;

			.multi-image2 {
				border-top-left-radius: 8upx;
				border-top-right-radius: 8upx;
				width: 333.3upx;
				height: 333.3upx;
				margin-bottom: 8upx;
			}
		}


		.multi-product3 {
			display: flex;
			flex-direction: column;
			width: 33.3%;
			margin-bottom: 39upx;

			.multi-image3 {
				border-top-left-radius: 8upx;
				border-top-right-radius: 8upx;
				width: 217upx;
				height: 217upx;
				margin-bottom: 8upx;
			}
		}


		.multi-product4 {
			display: flex;
			flex-direction: column;
			width: 25%;
			margin-bottom: 39upx;

			.multi-image4 {
				border-top-left-radius: 8upx;
				border-top-right-radius: 8upx;
				width: 158upx;
				height: 160upx;
				margin-bottom: 8upx;
			}
		}
		.multi-description {
			display: flex;
			flex-direction: column;
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
		}
		


	}







	
	
</style>
