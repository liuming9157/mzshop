<template>
	<view>
		<uni-segmented-control :current="current" :values="tabArray" @clickItem="tabClick" styleType="text" activeColor='#d81e06'></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<order-all :list='allTradeList'></order-all>
			</view>
			<view v-show="current === 1">
				<order-not-pay :list='notPayList'></order-not-pay>
			</view>
			<view v-show="current === 2">
				<order-not-receive :list='notReceiveList'></order-not-receive>
			</view>
			<view v-show="current === 3">
				<order-not-evaluate :list='notEvaluateList'></order-not-evaluate>
			</view>
			<view v-show="current === 4">
				<order-done :list='tradeDoneList'></order-done>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/order/uni-segmented-control.vue'
	import orderAll from '@/components/order/order-all.vue'
	import orderNotPay from '@/components/order/order-not-pay.vue'
	import orderNotReceive from '@/components/order/order-not-receive.vue'
	import orderNotEvaluate from '@/components/order/order-not-evaluate.vue'
	import orderDone from '@/components/order/order-done.vue'
	import mockData from '@/data/order.js'

	export default {
		components: {
			uniSegmentedControl,
			orderAll,
			orderNotPay,
			orderNotReceive,
			orderNotEvaluate,
			orderDone
		},
		data() {
			return {
				current: 0,
				tabArray: ['全部', '待收款', '待收货', '待评价', '已完成'],
				allTradeList: [],
				notPayList: [],
				notReceiveList: [],
				notEvaluateList: [],
				tradeDoneList: []
			};
		},
		methods: {
			tabClick(index) {
				if (this.current != index) {
					this.current = index
				}
			}
		},
		onLoad(options) {
			this.current=options.index;
			this.allTradeList = mockData.allTradeList;
			this.notPayList = mockData.notPayList;
			this.notReceiveList = mockData.notReceiveList;
			this.notEvaluateList = mockData.notEvaluateList;
			this.tradeDoneList = mockData.tradeDoneList;
		},
		
	}
</script>

<style lang="scss">

</style>
