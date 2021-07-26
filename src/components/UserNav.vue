<template lang="pug">
.header
    ul.header__ul
        router-link(to="/")
            li.header__li
                .header__li__icon.icon--help
                .header__li__text {{helpText[selected]}}
        router-link(to="/")
            li.header__li 
                .header__li__icon.icon--user
                .header__li__text {{SigninText[selected]}}
        li.header__li(v-show="!active", @click.stop="showOption") <!--optBox啟動前-->
            .header__li__icon.icon--flag
            .header__li__text.gradient.arrow--down {{language[selected]}}
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
            helpText:["HELP", "幫助"],
            SigninText:["SIGN IN", "登入"],
            language:[
                "EN", 
                "中文"
            ],
            // selected:0,
            active: this.optBoxActive,
        };
    },
    computed:{
        selected(){
            return this.$store.state.selected;
        }  
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
    computed:{
        selected(){ //vuex取代下方cookies監聽語言選項
            return this.$store.state.selected;
        }
    },
    // created(){
    //     if(this.$cookies.get('languageOpt')){
    //         this.selected = this.$cookies.get('languageOpt');
    //     }
    // },
    methods:{
        showOption(){
            this.active = true;
            this.$emit('OptBoxIsActive') //通知父層開始監聽畫面以關閉optBox顯示
        },
        selectOpt(num){
            this.active = false;
            this.$store.commit('changeSelected', num);
            // this.selected = num;
            // this.$cookies.set("languageOpt", num);
        },
    }
};
</script>

<style lang="scss" scoped>
    $color: #0080F0; //UserNav
    $icon-size: 45px;

    a{
        color: black;
    }
    a:hover{
        text-decoration: none;
    }
    .gradient{
        position: relative;
    }
    .header{
        height: 20vh;
        min-height: 150px;

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
            cursor: pointer;

            &__icon{
                width: $icon-size;
                height: $icon-size;
                line-height: $icon-size;
                background-size: cover;
            }

            &__text{
                font-size: 1.2em;
                line-height: $icon-size;
                margin-left: 35px;
                margin-right: 70px;
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
                background-color: white;
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
    @media (max-width: 768px) { 
        .header{
            &__ul{
                width: 100vw;
                display: flex;
                justify-content: space-between;
                margin-right: 0;
            }

            &__li{
                width: 100px;

                &__icon{
                    margin-left: auto;
                    margin-right: auto;
                }
                &__text{
                    font-size: .67em;
                    line-height: 20px;
                    margin-left: .67em;
                    margin-right: .67em;
                }

                .arrow--down:after{
                    border-color: transparent;
                }
            }
        }

    }
</style>