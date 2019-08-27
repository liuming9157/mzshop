<template>
	<view>
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in nav" :key='index' @click="goDetail(item.url)">
				<image :src="item.image" class="nav-image"></image>
				<text class="nav-text">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "grid",
		props: {
			nav: {
				type:Array,
				default:function(){
					return[]
				}
			}
		},
		data() {
			return {}
		},
		methods: {
			goDetail(e) {
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style lang="scss">
.nav {
		margin: 15upx;
		border-radius: 15upx;
		width: 720upx;
		display: flex;
		flex-wrap: wrap;
		background-color: #FFFFFF;

		.nav-item {
			width: 20%;
			height: 200upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;

			.nav-image {
				width: 50upx;
				height: 50upx;
			}

			.nav-text {
				height: 40upx;
				line-height: 40upx;
				font-size: 28upx;
				text-align: center
			}
		}
	}

	
</style>