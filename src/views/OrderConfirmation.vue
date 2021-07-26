<template lang="pug">
div.container
  .header
    .stepBox
      .stepBox__num.stepBox__check
      .stepBox__name {{iconOneText[selected]}}
    .dashline
    .stepBox
      .stepBox__num.stepBox__check
      .stepBox__name {{iconTwoText[selected]}}
  .informBox
    .header {{title[language[selected]]}}
    .main
        .inform__wrap
            .inform__type
                .inform__type__img
                    img.img--resp( src='../assets/OrderCreated__icon.png' alt='Credit Card' width=80 height=62.5)
            .inform__text {{message[language[selected]]}}
</template>

<script>
import { orderConfirmApi } from '../api'

export default {
    data(){
      return{
        iconOneText:["My Data", "個人資料"],
        iconTwoText:["Payment", "付款資訊"],
          language:[
              'en',
              'zh_CN'
          ],
          title: '',
          message: '',
          messages: [],
          img: '',
      }
    },
    computed:{
        selected(){ //vuex取代cookies監聽語言選項以即時渲染畫面
          return this.$store.state.selected;
        }
    },
    created(){

        orderConfirmApi()
        .then(res =>{
          console.log(res);
          let data = res.data;
          // let languageOpt = this.$cookies.get('languageOpt');
          // languageOpt = this.language[languageOpt]

          this.title = data.title;
          this.message = data.message;
        })
        .catch(err =>{
          console.log(err)
        })
    }
}
</script>

<style lang="scss" scoped>
$color1: #1BA1E2; //stepBox
$color2: #0471B1; //stepBox border
$color3: #4C9AFF; //inputBox breder
$color4: rgb(62, 129, 216); //button hover
$color5: #60A917; //stepBox__check
$color6: #2D7600; //stepBox__check border


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

    &__check{
        background-color: $color5;
        border: 1px solid $color6;
    }

    //checkMark in Css
    &__check::after{
        content: "";
        display: inline-block;
        transform: rotate(45deg);
        height: 24px;
        width: 12px;
        border-bottom: 5px solid white;
        border-right: 5px solid white;
        border-radius: 0 0 3px 0;
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
    width: 50%;
    @extend %margin-vertical;

    .inform{

        &__wrap{
            padding: 1em 2em 2em;
        }

        &__type{

            &__name{
                font-size: 1.5em;
                font-weight: bold;
            }
        }

        &__text{
            font-size: 1.05em;
            margin-bottom: .5em;
            margin-top: 2em;
        }
    }
  }
}
@media (max-width: 768px) { 
  .informBox{
    width: 100%;
    .main{
      width: 100%;
    }
  }
}
</style>