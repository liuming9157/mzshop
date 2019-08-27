<template>
	<view class="user-card">
		<view class="usercard-top">
			<view :class="expand.length>0?'avatar':'avatar-noexpand'">
				<image :src="userinfo.avatar"></image>
				<view class="name"> <text>{{userinfo.username}}</text> </view>
			</view>
		</view>
		<block v-if="expand.length>0">
			<view class="usercard-bottom">
				<block v-for="(item,index) in expand" :key='index'>
					<block v-if="index>0">
						<view class="line"></view>
					</block>
					<view class="usercard-bottom-item">
						<view class="item-top"> <text>{{item.number}}</text> </view>
						<view class="item-bottom"> <text>{{item.name}}</text> </view>
					</view>
				</block>
			</view>
		</block>
	</view>
</template>


<script>
	export default {
		name: "user-card",
		props: {
			userinfo: {},
			expand:{
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

<style>
	.user-card {
		margin: 5% 5%;
		width: 90%;
		display: flex;
		flex-direction: column;
		height: 320upx;
		border-radius: 15upx;
		background: linear-gradient(45deg,#FFFF00,#F0AD4E);
	}

	.usercard-top {
		width: 100%;
	}

	.avatar {
		width: 40%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		align-content: center;
		text-align: right;
	}

	.avatar-noexpand {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		text-align: right;
	}

	.avatar image {
		border-radius: 70upx;
		width: 100upx;
		height: 100upx;
		margin: 50upx 33.3upx 0upx 50upx;
	}

	.avatar-noexpand image {
		border-radius: 70upx;
		width: 100upx;
		height: 100upx;
	}

	.name text {
		font-size: 31upx;
		color: #5B441A;
		margin: 50upx 0upx 0upx 0upx;
	}

	.usercard-bottom {
		width: 100%;
		height: 160upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.usercard-bottom-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
	}

	.item-top text {
		font-size: 31upx;
		text-align: center;
		color: #5B441A
	}

	.item-bottom text {
		font-size: 25upx;
		text-align: center;
		color: #5B441A
	}

	.line {
		height: 50upx;
		width: 3upx;
		margin: 0 20upx;
		background-color: rgba(0, 0, 0, 0.2);
	}
</style>
