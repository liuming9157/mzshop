<template>
	<view class="specfic-content"> <text class="specfic-title">规格</text>
		<view>
			<text v-for="(item,index) in specficdata.specfic" :key='index' :class="[item.select?'specfic-item-active':'specfic-item']"
			 @click="specficFun(index)">{{item.value}}</text>
		</view>
		<text class="specfic-title">尺寸</text>
		<view>
			<text v-for="(item,index) in specficdata.size" :key='index' :class="[item.select?'specfic-item-active':'specfic-item']"
			 @click="sizeFun(index)">{{item.value}}</text>
		</view>
		<text class="specfic-title">购买数量</text>
		<uni-number-box @change="numberChange"></uni-number-box>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/cart/uni-number-box.vue'
	export default {
		name: 'specfic',
		components: {
			uniNumberBox
		},
		props: {
			specficdata: {}
		},
		methods: {
			//选择规格		
			specficFun(index) {
				console.log(this.specficdata)
				for (var i = 0; i < this.specficdata.specfic.length; i++) {
					this.specficdata.specfic[i].select = false;
				}
				this.specficdata.specfic[index].select = true;
			},
			//选择尺寸		
			sizeFun(index) {
				for (var i = 0; i < this.specficdata.size.length; i++) {
					this.specficdata.size[i].select = false;
				}
				this.specficdata.size[index].select = true;
			},
			numberChange() {}
		}
	}
</script>

<style>
	.specfic-content {
		display: flex;
		margin: 24.1upx 33upx 33.3upx 33upx;
		flex-direction: column;
	}

	.specfic-title {
		font-size: 31.3upx;
		color: #1a1a1a;
	}

	.specfic-item {
		width: 148upx;
		text-align: center;
		padding: 0upx 7.5upx;
		margin: 24.2upx 16.7upx 41upx 0upx;
		font-size: 25upx;
		color: #1a1a1a;
		border-radius: 8.3upx;
		background-color: #f2f2f2;
	}

	.specfic-item-active {
		width: 148upx;
		text-align: center;
		padding: 0upx 7.5upx;
		margin: 24.2upx 16.7upx 41upx 0upx;
		font-size: 25upx;
		color: #ff7500;
		border: 1upx solid #ff7500;
		border-radius: 8.3upx;
	}
</style>
