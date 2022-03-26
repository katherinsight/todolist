<template>
  <div class="hello">
    <h1>{{ array[0] }}</h1>
    <h1>이름은 {{ person1.name }}이고, 나이는 {{person1.age}}살입니다.</h1>
    <h1>이름은 {{ person2.name }}이고, 나이는 {{person2.age}}살입니다.</h1>
    <h1>이름은 {{ person3.name }}이고, 나이는 {{person3.age}}살입니다.</h1>
	<input type="checkbox" v-model="radio" value="red">라디오버튼</input>
	<input type="checkbox" v-model="radio" value="green">라디오버튼</input>
	<input type="checkbox" v-model="radio" value="blue">라디오버튼</input>
	<h1 :class="radio">안녕하세요</h1>
  </div>
</template>

<script>
var code ={name:'경민', age:30};
export default {
  name: 'HelloWorld',
  data: function() {
	  return {
    		msg: '뷰입니다',
		  	array: ['커피','자동차','음료'],
		  	person1: {name:'경민', age:30},
		  	person2: {name:'아이유', age:28},
		    person3: {name:'존박', age:35}
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
	background-color:red;
	}
.green {
	background-color:green;
	}
.blue {
	background-color:blue;
	}
</style>
