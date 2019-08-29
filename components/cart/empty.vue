<template>
	<view v-if="!hasLogin || empty===true" class="empty">
		<image src="http://cdn.mzyun.tech/shop/emptyCart.jpg" mode="aspectFit"></image>
		<view v-if="hasLogin" class="empty-tips">
			空空如也
			<navigator class="navigator" v-if="hasLogin" url="../index/index" open-type="switchTab">随便逛逛></navigator>
		</view>
		<view v-else class="empty-tips">
			空空如也
			<view class="navigator" @click="navToLogin">去登陆></view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'empty',
		props:{
			hasLogin:{
				type:Boolean,
				default:true
			},
			empty:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			navToLogin(){
				uni.navigateTo({
					url: '/pages/login/login/login'
				})
			},
		}
	}
</script>

<style lang="scss">
	.empty{
		position:fixed;
		left: 0;
		top:0;
		width: 100%;
		height: 100vh;
		padding-bottom:100upx;
		display:flex;
		justify-content: center;
		flex-direction: column;
		align-items:center;
		background: #fff;
		image{
			width: 240upx;
			height: 160upx;
			margin-bottom:30upx;
		}
		.empty-tips{
			display:flex;
			font-size: 26upx;
			color: gray;
			.navigator{
				color: $uni-color-primary;
				margin-left: 16upx;
			}
		}
	}
</style>
