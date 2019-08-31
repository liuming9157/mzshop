<template>
	<view class="content">
		<view class="address-list" v-for="(item, index) in addressList" :key="index">
			<view class="address-list-info">
				<view class="address-list-line1">
					<text v-if="item.default==1" class="tag">默认</text>
					<text class="address-list-name">{{item.name}}</text>
					<text class="address-list-mobile">{{item.mobile}}</text>
				</view>
				<view class="address-list-line2">
					<text class="address-list-detail">{{item.label}}{{item.address}}</text>
				</view>
			</view>
			<uni-icon type="compose" @click.stop="editAddress"></uni-icon>
			<uni-icon type="trash" @click="deleteAddress"></uni-icon>
		</view>

		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	import uniIcon from '@/components/mine/uni-icon.vue'
	import mockData from '@/data/address.js'
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				addressList: []
			}
		},
		onLoad(option) {
			this.addressList = mockData.addressList
		},
		methods: {
			editAddress(type, item) {
				this.$msg('点击修改')
			},
			deleteAddress() {
				this.$msg('点击删除')
			},
			addAddress(){
				this.$jump('../address-edit/address-edit')
			}

		}
	}
</script>

<style lang='scss'>

	.content {
		position: relative;
	}

	.address-list {
		display: flex;
		align-items: center;
		padding: 20upx 30upx;
		;
		background: #fff;
		position: relative;
	}

	.address-list-info {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.address-list-line1 {
		display: flex;
		align-items: center;

		.tag {
			font-size: 24upx;
			color: $theme-color;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid $theme-color;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}

		.address-list-name,
		.address-list-mobile {
			font-size: 30upx;
			color: black;
			margin-right: 30upx;
		}
	}

	.address-list-line2 {
		font-size: 28upx;
		color: gray;
		margin-top: 16upx;

		.address-list-detail {
			margin-right: 30upx;
		}
	}



	.add-btn {
		position: fixed;
		bottom: 16upx;
		z-index: 95;
		margin: 0 30upx;
		width: 690upx;
		height: 80upx;
		line-height: 80upx;
		font-size: 32upx;
		text-align: center;
		color: #fff;
		background-color: $theme-color;
		border-radius: 10upx;
	}
</style>
