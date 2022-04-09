<template>
	<div>
		<main class="todo">
			<div class="container">
				<ul class="list_add">
					<li class="list_add_tit"><p>New 등록 하기</p></li>
					<li><p><input type="text"><button>Post</button></p></li>
				</ul>
			</div>
		</main>
	</div>
</template>

<script>	
export default {
	name: 'todoInput',
	data: function(){
		return {
			addText:'',
		}
	},
	methods:{
		addTodo(){
			this.$emit("addTodo", this.addText);
		},
	}
}
</script>

<style>
</style>