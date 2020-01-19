<template>
  <div>
    <p style="text-align: center"><button @click="postCommon">一般数据发送</button><input v-model="data1"/></p>
    <p style="text-align: center"><button @click="postJson">json数据发送：针对@requestBody</button><input v-model="data2"/></p>
  </div>
</template>

<script>


export default {
  data()  {
    return {
      data1: '',
      data2: ''
    }
  },
  methods: {
    postCommon: function() {
      this.Axios.post('restTemplate/restTemplatePost2', this.Qs.stringify({
        param: this.data1
      }))
      .then(function (response) {
        window.console.log(response.data);
        alert("发送一般数据成功, 返回值 ： " + response.data.key);
      })
      .catch(function (error) {
        window.console.log(error);
      });
    },
    postJson: function() {
      this.Axios.post('restTemplate/restTemplatePost', {
        message: this.data2
      })
      .then(function (response) {
        window.console.log(response.data);
        alert("发送json数据成功, 返回值 ： " + response.data.key);
      })
      .catch(function (error) {
        window.console.log(error);
      });
    }
  }

}
</script>

<style>

</style>
