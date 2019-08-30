<template>
	<view v-if='hasLogin&& cartList.length>0'>
		<!-- 列表 -->
		<view class="cart-list">
			<block v-for="(item, index) in cartList" :key="item.id">
				<view class="cart-item">
					
						<checkbox :checked='item.choosed' color='#FF3333' @click="check('item', index)"/>
					
<!-- 					<image class="cart-check" :src="item.choosed==true?'/static/cart/checked.png':'/satic/cart/unchecked.png'"  @click="check('item', index)"></image>
 -->					<view class="image-wrapper">
						<image :src="item.goods_image" mode="aspectFill"></image>
					</view>
					<view class="item-right">
						<text class="clamp title">{{item.goods_name}}</text>
						<text class="attr">{{item.goods_spec}}</text>
						<text class="price">¥{{item.goods_price}}</text>
						<uni-number-box class="step" :min="1" :value="item.number" :isMin="item.number===1"
						 :index="index" @eventChange="numberChange" :data-index='item.index'></uni-number-box>
					</view>
				</view>
			</block>
		</view>
		<!-- 底部菜单栏 -->
		<view class="action-section">
			<view class="checkbox">
				<image :src="allChecked?'http://cdn.mzyun.tech/shop/selected.png':'http://cdn.mzyun.tech/shop/select.png'" mode="aspectFit"
				 @click="check('all')"></image>
				<view class="clear-btn" :class="{show: allChecked}" @click="clearCart">
					清空
				</view>
			</view>
			<view class="total-box">
				<text class="price">¥{{totalPrice}}</text>

			</view>
			<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/cart/uni-number-box.vue'
	export default {
		name: 'cart-item',
		components: {
			uniNumberBox
		},
		props: {
			hasLogin: {
				type: Boolean,
				default: true
			},
			cartList: {
				type: Array,
				default: function() {
					return []
				}
			},
			allChecked: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				totalPrice: 0
			}
		},
		methods: {
			//数量
			numberChange(data) {
				console.log(data)
				this.cartList[data.index].number = data.number;
				this.updateTotalPrice();
			},
			//计算总价
			updateTotalPrice() {
				let list = this.cartList;
				if (list.length === 0) {
					this.empty = true;
					return;
				}
				let totalPrice = 0;
				list.forEach(item => {
					if (item.choosed === true) {
						totalPrice += item.goods_price * item.number;
					} 
				})
				this.totalPrice = Number(totalPrice.toFixed(2));
			},
			

			//选中状态处理
			check(type, index) {
				if (type === 'item') {
					this.cartList[index].choosed = !this.cartList[index].choosed
				} 
				this.updateTotalPrice();
			}
		},
		created:function(){
			this.updateTotalPrice()
		}
	}
</script>

<style lang="scss">
	/* 购物车列表项 */
	.cart-item {
		display: flex;
		position: relative;
		align-content: center;
		align-items: center;
		padding: 30upx 40upx;
		.cart-check{
			width: 30upx;
			height: 30upx;
		}
		.image-wrapper {
			width: 230upx;
			height: 230upx;
			flex-shrink: 0;
			position: relative;

			image {
				width: 230upx;
				height: 230upx;
				border-radius: 8upx;
			}
		}

		.checkbox {
			position: absolute;
			left: -16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: gray;
			background: #fff;
			border-radius: 50px;
		}

		.item-right {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position: relative;
			padding-left: 30upx;

			.title,
			.price {
				font-size: 30upx;
				color: black;
				height: 40upx;
				line-height: 40upx;
			}

			.attr {
				font-size: 26upx;
				color: gray;
				height: 50upx;
				line-height: 50upx;
			}

			.price {
				height: 50upx;
				line-height: 50upx;
			}
			.step{
				
			}
		}

		.del-btn {
			padding: 4upx 10upx;
			font-size: 34upx;
			height: 50upx;
			color: gray;
		}
	}

	/* 底部栏 */
	.action-section {
		/* #ifdef H5 */
		margin-bottom: 100upx;
		/* #endif */
		position: fixed;
		left: 30upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 100upx;
		padding: 0 30upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx;

		.checkbox {
			height: 52upx;
			position: relative;

			image {
				width: 52upx;
				height: 100%;
				position: relative;
				z-index: 5;
			}
		}

		.clear-btn {
			position: absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52upx;
			line-height: 52upx;
			padding-left: 38upx;
			font-size: 28upx;
			color: #fff;
			background: gray;
			border-radius: 0 50px 50px 0;
			opacity: 0;
			transition: .2s;

			&.show {
				opacity: 1;
				width: 120upx;
			}
		}

		.total-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			text-align: right;
			padding-right: 40upx;

			.price {
				font-size: 32upx;
				color: black;
			}

			.coupon {
				font-size: 24upx;
				color: gray;

				text {
					color: black
				}
			}
		}

		.confirm-btn {
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: 26upx;
			background: $theme-color;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
	}

	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked {
		color: $uni-color-primary;
	}
</style>
