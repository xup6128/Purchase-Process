<template lang="pug">
.header
    ul.header__ul
        li.header__li
            .header__li__icon.icon--help
            .header__li__text HELP
        li.header__li 
            .header__li__icon.icon--user
            .header__li__text SIGN IN
        li.header__li(v-show="!active") <!--optBox啟動前-->
            .header__li__icon.icon--flag(@click.stop="showOption")
            .header__li__text.gradient.arrow--down(@click.stop="showOption") {{language[selected]}}
        li.header__li(v-show="active") <!--optBox啟動後-->
            .header__li__contentsWrap
                .header__li__content(@click="selectOpt(0)")
                    .header__li__text.gradient.arrow--down {{language[0]}}
                .header__li__content(@click="selectOpt(1)")
                    .header__li__text {{language[1]}}    
</template>

<script>
export default {
    name: 'UserNav',
    data(){
        return{
            language:[
                "EN",
                "CN"
            ],
            selected:0,
            active: this.optBoxActive,
        };
    },
    props:['optBoxActive'],
    watch:{
        optBoxActive: {
            //監聽父層以關閉optBox顯示
            immediate: true,
            handler (val){
                this.active = val
            }
        }
    },
    methods:{
        showOption(){
            this.active = true;
            this.$emit('OptBoxIsActive') //通知父層開始監聽畫面以關閉optBox顯示
        },
        selectOpt(num){
            this.active = false;
            this.selected = num;
        },
    }
};
</script>

<style lang="scss" scoped>
    $color: #0080F0; //UserNav
    $icon-size: 45px;

    .gradient{
        position: relative;
    }
    .header{
        height: 155px;

        &__ul{
            list-style-type: none;
            display: flex;
            width: max-content;
            margin-left: auto;
            padding: 2em 0;
            margin-right: 50px;
        }

        &__li{
            display: flex;

            &__icon{
                width: $icon-size;
                height: $icon-size;
                line-height: $icon-size;
                cursor: pointer;
                background-size: cover;
            }

            &__text{
                font-size: 1.2em;
                line-height: $icon-size;
                margin-left: 35px;
                margin-right: 70px;
                cursor: pointer;
            }

            .arrow--down:after{
                content: "";
                width: 13px;
                height: 13px;
                border-style: solid;
                border-color: $color;
                border-width: 0 3px 3px 0;
                position: absolute;
                top: 50%;
                right: -100%;
                transform: rotate(45deg) translateY(-100%);
            }

            &__contentsWrap{
                margin-left: 29px;
                background-color: #FFFFFF;
                box-shadow: 3px 4px #B4B4B4;
            }

            &__content{
                cursor: pointer;
            }

            &__content:hover{
                background-color: $color;
                color: white;
            }

            &__content:hover .arrow--down:after{
                border-color: white;
            }

        }
    }
    .icon{
        &--help{
            background-image: url(..\assets\Icon--Help.png);
        }

        &--user{
            background-image: url(..\assets\Icon--User.png);
        }

        &--flag{
            width: $icon-size/3*2;
            height: $icon-size/3*2;
            margin: auto 0;
            background-image: url(..\assets\Icon--Flag.png);

        }
    }
</style>