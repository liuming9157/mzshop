<template>
	<view class="goos_container">
		<view v-for="(item,index) in list" :key='index' class="goos_lists">
			<view class="space_between align_items_center">
				<view class="time_clock flex_row ">
					<image class="clock_image" src="/static/order/clock.png"></image> 
					<text class="goods_time">2018-11-28 17:15:20</text>
				</view>
			</view>
			<view @click="goToPage(item)" class="sigle_goos_list">
				<view class="image_contaner">
					<image class="goods_image" :src="item.image"></image>
				</view>
				<view class="goods_description flex_row">
					<view class="title_size flex_column"> <text class="goods_title">{{item.title}}</text> <text class="goods_size">{{item.size}}</text>
					</view>
					<view class="money_amount  flex_column"> <text class="goods_money">￥{{item.money}}</text> <text class="goods_amount">
							X {{item.amount}}</text> </view>
				</view>
			</view>
			<view class="separate_line"></view>
			<view class="bottom_amount_money"> <text class="_amount">共1件商品</text> <text class="need_pay" v-if="item.state == 1">
					需付款 ：</text> <text class="need_pay" v-if="item.state == 3 || item.state == 4 || item.state == 2"> 实付款 ：</text>
				<text class="_money">￥{{item.money}}</text> </view>
			<view class="state_btn"> <text class="_btn" @click="ok()">去评价</text> </view>
			<view v-show="index !== list.length-1" class="separate"></view>
		</view>
	</view>
</template>
<script>
	export default {
		name:'order-not-evaluate',
		props:{
			list:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		methods:{
			goToPage(item) {
				
			},
			ok() {
				
			}
		}
		
	}
</script>
<style lang="scss">
	.goos_container {
		display: flex;
		flex-direction: column;
		padding-bottom: 50upx;
	}

	.goos_lists {
		display: flex;
		flex-direction: column;
	}

	.time_clock {
		margin-top: 38upx;
		margin-bottom: 24upx;
		margin-left: 33upx;
		align-items: center;
	}

	.goods_time {
		font-size: 25upx;
		color: #1a1a1a;
		opacity: 0.5;
	}

	.clock_image {
		width: 33.3upx;
		height: 33.3upx;
		margin-right: 10upx;
	}

	._state {
		margin-right: 33upx;
	}

	.delete_image {
		width: 50upx;
		height: 50upx;
		margin-top: 15upx;
		margin-left: 15.9upx;
	}

	.sigle_goos_list {
		display: flex;
		padding-bottom: 26upx;
	}

	.image_contaner {
		width: 133.3upx;
		height: 133.3upx;
		margin: 0 33upx 0 33upx;
	}

	.goods_image {
		width: 133.3upx;
		height: 133.3upx;
		border-radius: 8upx;
	}

	.goods_description {
		width: 75%;
	}

	.title_size {
		width: 85%;
	}

	.goods_title {
		color: #1a1a1a;
		font-size: 28upx;
		line-height: 40.6upx;
		margin-bottom: 26.6upx;
	}

	.goods_size {
		color: #1A1A1A;
		opacity: 0.5;
		font-size: 21upx;
	}

	.money_amount {
		width: 15%;
		margin-right: 33upx;
	}

	.goods_money {
		width: 100%;
		font-size: 27upx;
		text-align: right;
	}

	.goods_amount {
		width: 100%;
		color: #1A1A1A;
		opacity: 0.5;
		font-size: 21upx;
		align-self: center;
		text-align: right;
	}

	.separate_line {
		margin-left: 33upx;
		margin-right: 33upx;
		border-bottom-width: 0.5upx;
		border-color: rgba(0, 0, 0, 0.2);
	}

	.bottom_amount_money {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		margin-top: 30upx;
	}

	._amount {
		margin-right: 10upx;
		font-size: 25upx;
		color: #1a1a1a;
		opacity: 0.5;
	}

	.need_pay {
		color: #1a1a1a;
		font-size: 28upx;
	}

	._money {
		color: #fa2a2d;
		font-size: 31upx;
		margin-right: 33upx;
	}

	.state_btn {
		display: flex;
		justify-content: flex-end;
		margin-top: 32.7upx;
		margin-right: 33upx;
	}

	._btn {
		width: 153upx;
		height: 58upx;
		text-align: center;
		color: $theme-color;
		font-size: 28upx;
		line-height: 58upx;
		border:3upx solid $theme-color;
		border-radius: 6upx;
	}

	.separate {
		height: 16.7upx;
		background-color: #000000;
		opacity: 0.05;
		margin-top: 23.3upx;
		margin-left: -33upx;
		margin-right: -33upx;
	}

	.align_items_center {
		display: flex;
		align-items: center;
	}

	.justify_content_center {
		display: flex;
		justify-content: center;
	}

	.flex_column {
		display: flex;
		flex-direction: column;
	}

	.flex_row {
		display: flex;
		flex-direction: row;
	}

	.flex_end {
		display: flex;
		justify-content: flex-end;
	}

	.space_between {
		display: flex;
		justify-content: space-between;
	}
</style>

