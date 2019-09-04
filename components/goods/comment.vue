<template>
	<view class="comments-content">
		<view class="comments-header"> <text class="comments-title">评论</text> <text @click="more" class="comments-more">更多</text>
			<image class="comments-header-image" @click="more" src="/static/arrow.png"></image>
		</view> <text class="comments-person-title">购买过该商品的用户认为</text>
		<view> <text v-for="(item,index) in commentdata.keywordList" :key='index' class="comments-item-active">{{item}}</text>
		</view>
		<view class="comments-detail-box" v-for="(item,index) in commentdata.detail" :key='index'>
			<view class="comments-detail-person">
				<image class="comments-person-img" :src="item.userIcon"></image> <text class="comments-name">{{item.userName}}</text>
			</view>
			<view class="comments-detail-wrap"> 
			<text class="comments-detail">{{item.commentsText}}</text>
				<image class="comments-detail-img" :src="item.commentsImg"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'comment',
		props:{
			commentdata:{}
		},
		methods:{
			more(){}
		}
	}
</script>

<style>
	.comments-content {
		display: flex;
		flex-direction: column;
		margin: 0upx 33upx;
		padding-bottom: 33.3upx;
	}

	.comments-header {
		display: flex;
		padding: 24.2upx 0upx;
		align-items: center;
	}

	.comments-title {
		flex: 1;
		font-size: 31.3upx;
		color: #1a1a1a;
	}

	.comments-more {
		padding: 0upx 9upx 0upx 0upx;
		font-size: 27.1upx;
		color: #808080;
	}

	.comments-header-image {
		height: 16upx;
		width: 16upx;
	}

	.comments-person-title {
		color: #1a1a1a;
		font-size: 27.1upx;
	}

	.comments-item-active {
		padding: 0upx 15upx;
		margin: 14.6upx 16.7upx 16.7upx 0upx;
		font-size: 20.8upx;
		color: #ff7500;
		border: 1upx solid #ff7500;
		border-radius: 8.3upx;
	}

	.comments-detail-box {
		display: flex;
		flex-direction: column;
		background-color: #f3f3f3;
		border-radius: 8.3upx;
	}

	.comments-detail-person {
		display: flex;
		align-items: center;
		margin: 36upx 0upx 18upx 33.3upx;
	}

	.comments-person-img {
		width: 83.3upx;
		height: 83.3upx;
		border-radius: 83.3upx;
	}

	.comments-name {
		margin: 0upx 0upx 0upx 16.7upx;
		color: #1a1a1a;
		font-size: 31.3upx;
	}

	.comments-detail-wrap {
		display: flex;
		margin: 0upx 33.3upx 33.3upx 33.3upx;
	}

	.comments-detail {
		flex: 1;
		margin-right: 16.7upx;
		color: #1a1a1a;
		font-size: 27.1upx;
	}

	.comments-detail-img {
		width: 133.3upx;
		height: 133.3upx;
		border-radius: 8.3upx;
	}
</style>
