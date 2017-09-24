<template>
	<div class="cartcontrol">
		<transition name="move">
			<div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCart"></div>
		</transition>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click="addCart"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	
	export default {
		
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			addCart(event) {
				//阻止pc端出现两次点击的默认事件
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					Vue.set(this.food,'count',1);
				}else{
					this.food.count++;
				}
			},
			decreaseCart() {
				//阻止pc端出现两次点击的默认事件
				if (!event._constructed) {
					return;
				}
				if(this.food.count){
					this.food.count--;
				}
			}
		}
	}
</script>

<style lang="less">
	.cartcontrol{
		font-size: 0;
		.cart-decrease,.cart-add{
			display: inline-block;
			padding: 6px;
			font-size: 24px;
			line-height: 24px;
			color: rgb(0,160,220);
		}
		.cart-decrease{
			transition: all 0.3s linear;
			opacity: 1;
			transform: translate3D(0,0,0);
			&.move-enter-active, &.move-leave-active {
              transition: all 0.3s
            }
            &.move-enter, &.move-leave-active {
                transform:translateX(36px) rotate(-180deg);
                opacity: 0
            }
		}
		.cart-count{
			display: inline-block;
			vertical-align: top;
			width: 12px;
			padding-top: 6px;
			line-height: 24px;
			text-align: center;
			font-size: 10px;
			color: rgb(147,153,159);
		}
		.cart-add{
		}
	}
</style>