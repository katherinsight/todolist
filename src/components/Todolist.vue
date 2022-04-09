<template>
  <div>
    <main class="todo">
        <div class="container">
            <h1>캐써린의 To - Do List</h1>

			<TodoInput @addTodo="addTodo"/>	

            <!-- ul.todo_list -->
            <ul class="todo_list">
                <li class="todo_list_tit"><p>할 일 To-do list</p></li>
				<li><p>	{{ remaining }} / {{ todolist.length }} 건 처리 </p></li>
                <li class="del_btn" v-for="(item, index) in todolist" :key="index">
                    <p :class="{doneStyle:item.done}"><input type="checkbox" name="check1" v-model="item.done"> {{ item.todo }}</p>
                    <ul class="todo_list_btn">
                        <!--<li><button>Edit</button></li>-->
                        <li><button @click="subTodo(index)">Delete</button></li>
                    </ul>
                </li>

            </ul>
            <!--// ul.todo_list -->

        </div>
    </main>
  </div>

</template>

<script>	
import TodoInput from './TodoInput.vue'
	
export default {
	name: 'todolist',
	component: {
		TodoInput,		
	},
	data: function(){
		return {
			todolist: [
				{done:false, todo: "vue.js 정리하기"},
				{done:false, todo: "자기소개서 수정하기"},
				{done:false, todo: "부산에서 오는 언니 만나기"},
				{done:false, todo: "이메일 보내기"},
				{done:false, todo: "프랑스어 문제지 풀기"},
				{done:false, todo: "당근마켓 예약 물건 사기"},


			]
			
		}
	},
	computed:{
		remaining(){
			return this.todolist.filter(function(val){
				return val.done;
			}).length;
		}
	},
	methods:{
		addTodo(val){
			this.todolist.push({done:false, todo:val});
		},
		subTodo(idx){
			this.todolist.splice(idx, 1);
			
		}
	}
}
</script>

<style>
	.doneStyle {
		text-decoration : line-through;
		color: lightgray;
	}
</style>