<template>
  <div>
    <main class="todo">
        <div class="container">
            <h1>To - Do List</h1>
				<TodoInput @addTodo="addTodo"/>

            <ul class="todo_list">
                <li class="todo_list_tit"><p>할 일</p></li>
				<li><p> {{ remaining }} / {{ todolist.length }} 건 처리 </p>
					<button @click="cleanTodo"> 처리완료삭제 </button>
				</li>
                <li class="del_btn" v-for="(item,index) in todolist" :key="index">
                    <p :class="{doneStyle:item.done}"><input type="checkbox" name="check1" v-model="item.done">{{ item.todo }}</p>
					<ul class="todo_list_btn">
                        <li><button @click="subTodo(index)">삭 제</button></li>
                    </ul>
                </li>
            </ul>

        </div>
    </main>	  
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue'
	
export default {
  name: 'todolist',
  components: {
	  TodoInput
  },
  data: function() {  
	  return {
		  todolist:[
			  {done:false, todo:"Vue.js 공부하기"},
			  {done:false, todo:"독서 2p 이상"},
			  {done:false, todo:"과제하기"},
			  {done:false, todo:"9시-스터디하기"},
			  {done:false, todo:"과제 채점"},
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
	  },
	  cleanTodo(){
		this.todolist = this.todolist.filter(function(val){
			return val.done == false;
		});
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