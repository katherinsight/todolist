<template>
  <div>
	<main class="todo">
		<div class="container">
			<ul class="list_add">
				<li class="list_add_tit"><p>등록 하기</p></li>
				<li><p><input type="text" v-model="addText">
					중요  <input type="checkbox" v-model="imp"> 
					포인트<input type="number" v-model="point">
					<button @click="addTodo">등 록</button></p></li>
			</ul>
		</div>
	</main>
  </div>
</template>

<script>
export default {
  name: 'todoInput',
  data: function() {  
	  return {
		addText:'',
	  }
  },
  methods:{
	addTodo(){
		this.$emit("addTodo", [this.addText, this.imp, this.point]);
		this.addText = '';
		this.imp = false;
		this.point = 0;
	},
  }
}
</script>