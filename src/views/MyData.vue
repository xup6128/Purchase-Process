<template lang="pug">
div.container
  .header
    .stepBox
      .stepBox__num 1
      .stepBox__name {{iconOneText[selected]}}
    .dashline
    .stepBox
      .stepBox__num 2
      .stepBox__name {{iconTwoText[selected]}}
  .informBox
    .header {{iconOneText[selected]}}
    p {{informText[selected]}}
    .main
      .inputBox
        label {{nameText[selected]}}
        sup * <br>
        input( :value="name" autofocus)
      .inputBox
        label {{lastNameText[selected]}}
        sup * <br>
        input.gradient( :value="lastName")
      .button.gradient.arrow--right(@click='nextPage') {{buttonText[selected]}}
</template>

<script>
export default {
    data(){
      return{
        iconOneText:["My Data", "個人資料"],
        iconTwoText:["Payment", "付款資訊"],
        informText:["Please enter your personal data and press continue", "請輸入您的個人資料並點擊繼續"],
        nameText:["Name", "名字"],
        lastNameText:["Last Name", "姓氏"],
        buttonText:["Continue", "繼續"],
        alertText:["Please type in your name", "請輸入您的個人資訊"]
      }
    },
    computed:{
      name(){
        return this.$store.state.Name;
      },
      lastName(){
        return this.$store.state.LastName;
      },
      selected(){
        return this.$store.state.selected;
      }
    },
    methods:{
      nextPage(){
        let values = document.querySelectorAll('input')
        // validation data
        if( !values[0].value || !values[1].value){
          alert(this.alertText[this.selected]);
          return
        }
        this.$store.commit('setName', values);
        this.$router.push({ path:'/checkout/step-2-payment', query:{ name: this.name, lastName: this.lastName}});
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
      max-width: 50px;
      max-height: 50px;

      background-color: $color1;
      border: 1px solid $color2;
      border-radius: 25px;
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
    max-width: 250px;
    width: 30vw;
    height: 25px;
    margin-left: 1em;
    margin-right: 1em;
  }
}

.informBox{
  min-height: 65vh;
  background-color: white;
  border: 1px solid black;
  box-shadow: 3px 4px #B4B4B4;
  padding: 2em;
  margin-top: 2em;
  margin-bottom: 2em;

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
        padding: 1em .5em .5em;
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

@media (max-width: 768px) { 
  .informBox{
    width: 100%;
    .main{
      width: 80%;
      .inputBox{
        input{
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 991px) { 
  .informBox{
    .main{
      .arrow--right:after{
        border-color: transparent;
      }
    }
  }
}
</style>