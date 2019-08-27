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
		width: 750px;
	}

	.sola-head {
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		margin: 31px 33px 31px 33px;
	}

	.sola-head-left {
		align-content: flex-end;
		align-items: center;
	}

	.sola-topic {
		color: #1A1A1A;
		font-size: 31.3px;
		line-height: 40.6px;
		margin-right: 30px;
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
		font-size: 27.1px;
		margin-right: 9px;
		align-self: center;
	}

	.sola-arrow {
		height: 27.1px;
		align-self: center;
	}

	.sola-list {
		border-color: #0000ff;
		flex-wrap: wrap;
		margin: 0px 33px 12px 33px;
	}

	.sola-product {
		display: flex;
		width: 100%;
		height: 363px;
		flex-direction: column;
		border-radius: 8px;
		background-color: #f2f2f2;
		margin-bottom: 17px;
	}

	.sola-image {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		margin-bottom: 17px;
	}

	.sola-title {
		color: #1A1A1A;
		font-size: 27.1px;
		line-height: 34.9px;
		margin-left: 15px;
	}
</style>
