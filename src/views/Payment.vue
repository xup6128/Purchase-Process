<template lang="pug">
div.container
  .header
    .stepBox
      .stepBox__num.stepBox__check
      .stepBox__name My Data
    .dashline
    .stepBox
      .stepBox__num 2
      .stepBox__name Payment   
  .informBox
    .header Payment
    p After making the payment you will receive a confirmation email with details of your purchase
    .main
        .inform__wrap
            .inform__type
                .inform__type__img
                    img( src='../assets/CreditCard__icon.png' alt='Credit Card' width=60 height=45)
                .inform__type__name {{name}}
            .inform__text {{text}}
            .inform__hint
                img( src='../assets/CreditCard__hint.png' alt='Credit Card' width=150 height=45)
        .button__wrap
            .button.gradient.button--left(@click='prePage') Back
            .button.gradient.button--right(@click='nextPage') Pay
    
</template>

<script>
export default {
    data(){
      return{
          name: "Credit Card",
          text: "You will be redirected to a secure payment platform. This is a secure process. The validation of your payment can take up to 24 hours.",
      }
    },
    computed:{
      name(){
        return this.$store.state.Name;
      },
      lastName(){
        return this.$store.state.LastName;
      }
    },
    methods:{
        nextPage(){
          //Post user info which get from Vuex to Api
          this.$router.push({ path:'/checkout/step-3-order-confirmation'});
        },
        prePage(){
          this.$router.push({ path:'/checkout/step-1-my-data'});
        }
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
      border-radius: 999em;
      color: white;
      font-size: 1.5em;
      line-height: 50px;
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
  min-height: 60vh;
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
            border: 2px solid #E6E6E6;
            padding: 1em 2em 2em 2em;
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
            margin-top: 1em;
        }
    }

    .button__wrap{
        display: flex;
        margin-top: 1.5em;
    }

    .button{
      width: 25%;
      text-align: center;
      padding: .5em 0;
      background-color: $color1;
      border: 1px solid $color2;
      border-radius: 5px;
      color: white;
      box-shadow: 3px 4px #C0C0C0;
      cursor: pointer;
    }
    .button:hover{
      background-color: $color4;
    }

    .button--right{
        margin-left: auto;
    }
    .button--right:after{
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
    .button--left:after{
      content: "";
      width: 13px;
      height: 13px;
      border-style: solid;
      border-color: white;
      border-width: 0 3px 3px 0;
      position: absolute;
      top: 35%;
      left: 15%;
      transform: rotate(135deg);
    }
  }
}
@media (max-width: 768px) { 
  .informBox{
    width: 100%;
    .main{
      width: 100%;
      .inform__wrap{
        .inform__text{
          font-size: .9em;
        }
      }
      .button--right:after{
        border-color: transparent;
      }
      .button--left:after{
        border-color: transparent;
      }
    }
  }
}
</style>