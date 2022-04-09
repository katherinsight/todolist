<template>
  <div>
    <main class="todo">
        <div class="container">
            <h1>캐써린의 To - Do List</h1>

            <!-- ul.list_add -->
            <ul class="list_add">
                <li class="list_add_tit"><p>New 등록 하기</p></li>
                <li><p><input type="text"><button>Post</button></p></li>
            </ul>
            <!--// ul.list_add -->

            <!-- ul.todo_list -->
            <ul class="todo_list">
                <li class="todo_list_tit"><p>할 일 To-do list</p></li>



                <li class="del_btn" v-for="(item, index) in todolist" :key="index">
                    <p>
                        <input type="checkbox" name="check1" value=""> {{ item.todo }}
                    </p>
                    <ul class="todo_list_btn">
                        <li><button>Edit</button></li>
                        <li><button>Delete</button></li>
                    </ul>
                </li>

            </ul>
            <!--// ul.todo_list -->

        </div>
    </main>
  </div>

</template>

<script>	
export default {
	name: 'todolist',
	data: function(){
		return {
			todolist: [
				{todo: "vue.js 정리하기"},
				{todo: "자기소개서 수정하기"},
				{todo: "부산에서 오는 언니 만나기"},
				{todo: "이메일 보내기"},
				{todo: "프랑스어 문제지 풀기"},
				{todo: "당근마켓 예약 물건 사기"},


			]
			
		}
	},
}
</script>

<style>
</style>