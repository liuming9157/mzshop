<template>
	<view class="center_container">
		<view class="center_container">
			<image class="logo_style" src="http://cdn.mzyun.tech/mzyun.png"></image>
			<view class="text_appname">明志商城</view>
			<view class="text_grey">1.0.1</view>
		</view>
		<view class="center_container bottom_con">
			<view>
				<text class="text_link">用户协议</text>
				<text class="text_link">隐私协议</text>
			</view>
			<text class="text_copy">版权所有@2013-2019明志科技保留一切权利</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.center_container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
	}

	.logo_style {
		height: 150upx;
		width: 150upx;
		margin-top: 117upx;
		border-radius: 30upx;
	}


	.text_appname {
		color: rgb(26, 26, 26);
		font-size: 31upx;
		margin-top: 22upx;
		margin-bottom: 13upx;
	}

	.text_grey {
		color: rgba(26, 26, 26, 0.5);
		font-size: 28upx;
	}

	.bottom_con {
		position: fixed;
		bottom: 33upx;
	}


	.text_link {
		color: #005BBA;
		font-size: 20.8upx;
		margin-right: 20upx;
	}

	.text_copy {
		color: rgba(26, 26, 26, 0.5);
		font-size: 21upx;
	}
</style>
