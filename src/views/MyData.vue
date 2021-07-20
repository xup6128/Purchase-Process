<template lang="pug">
div
  .header
    .stepBox
      .stepBox__num 1
      .stepBox__name My Data
    .dashline
    .stepBox
      .stepBox__num 2
      .stepBox__name Payment   
  .container
    .header My Data
    p Please enter your personal data and press continue
    .main
      .inputBox
        label Name 
        sup * <br>
        input(v-model="Name" autofocus)
      .inputBox
        label Last Name
        sup * <br>
        input.gradient(v-model="LastName")
      .button.gradient.arrow--right(@click='nextPage') Continue
</template>

<script>
export default {
    data(){
      return{
        Name: "John",
        LastName: "Doe"
      }
    },
    methods:{
      nextPage(){
        this.$router.push({ path:'/checkout/step-2-payment'});
      }
    }
}
</script>

<style lang="scss" scoped>
$color1: #1BA1E2;
$color2: #0471B1; 
$color3: #4C9AFF; 
$color4: rgb(62, 129, 216); 

%margin-vertical{
  margin-left: auto;
  margin-right: auto;
}

.gradient{
  position: relative;
}

.header{
  display: flex;
  width: max-content;
  @extend %margin-vertical;

  .stepBox{
    width: max-content;
    text-align: center;

    &__num{
      width: 50px;
      height: 50px;
      background-color: $color1;
      border: 1px solid $color2;
      border-radius: 999em;
      color: white;
      font-size: 1.5em;
      line-height: 50px;
      @extend %margin-vertical;
    }

    &__name{
      font-size: 1.2em;
      margin-top: .5em;
    }

  }

  .dashline{
    border-bottom: 1px dashed black;
    width: 250px;
    height: 25px;
    margin-left: 1em;
    margin-right: 1em;
  }
}

.container{
  height: 60vh;
  background-color: white;
  border: 1px solid black;
  box-shadow: 3px 4px #B4B4B4;
  padding: 2em;
  margin-top: 2em;

  .header{
    font-size: 2.7em;
    margin-bottom: 20px;
  }

  p{
    margin-bottom: 20px;
  }

  .main{
    width: 33%;
    @extend %margin-vertical;

    .inputBox{

      text-align: left;

      label{
        color: #596780;
        font-weight: bold;
      }

      sup{
        color: red;
      }

      input{
        width: 100%;
        border: 3px solid $color3;
        padding: 1em .5em .5em .5em;
        border-radius: 5px;
        margin-top: 5px;
        margin-bottom: 30px;
      }
      input:focus{
        outline: none;
      }
    }

    .button{
      width: 50%;
      text-align: center;
      padding: .5em 0;
      background-color: $color1;
      border: 1px solid $color2;
      border-radius: 5px;
      color: white;
      box-shadow: 3px 4px #C0C0C0;
      margin-left: 50%;
      margin-bottom: 30px;
      cursor: pointer;
    }
    .button:hover{
      background-color: $color4;
    }

    .arrow--right:after{
      content: "";
      width: 13px;
      height: 13px;
      border-style: solid;
      border-color: white;
      border-width: 0 3px 3px 0;
      position: absolute;
      top: 35%;
      right: 15%;
      transform: rotate(315deg);
    }
  }
}
</style>