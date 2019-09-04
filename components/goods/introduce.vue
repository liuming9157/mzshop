<template>
	<view class="goodintroduced-content"> <text class="goodintroduced-title">商品介绍</text>
		<view v-for="(item,index) in list" :key='index'>
			<text class="goodintroduced-name">{{item.title}}</text>
			<text class="goodintroduced-value">{{item.value}}</text>
		</view>
	</view>
</template>
<script>
export default{
	name:'introduce',
	props:{
		list:{
			type:Array,
			default:function(){
				return []
			}
		}
	}
}
</script>
<style>
	.goodintroduced-content {
		display: flex;
		flex-direction: column;
		margin: 26.4upx 33upx 0upx 33upx;
	}

	.goodintroduced-title {
		margin: 0upx 0upx 26.4upx 0upx;
		font-size: 31.3upx;
		color: #1a1a1a;
	}

	.goodintroduced-name {
		width: 108.9upx;
		margin: 0upx 33.3upx 33.3upx 0upx;
		font-size: 27.1upx;
		color: #1a1a1a;
	}

	.goodintroduced-value {
		margin: 0upx 0upx 33.3upx 0upx;
		font-size: 27.1upx;
		color: #1a1a1a;
	}
</style>

