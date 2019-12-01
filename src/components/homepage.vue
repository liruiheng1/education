<template>
        <section class="box">
            <div class="roms-header">
                <router-link to="/welcome" tag="h3">
                 <a href="">电商后台管理系统</a>
                </router-link>
                <button @click="quit()" >退出</button>
            </div>
            <div class="roms">
                <div class="roms-left">
                    <div class="roms-box" @click="show" >
                    |||
                    </div>
                    <div class="roms-list">
                            <el-row class="tac">
                                <el-col :span="12">
                                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#373D41" router="true" unique-opened="false" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
                                    <el-submenu :index="key+1" v-for="(item,key) in menu " :key="key">
                                        <template slot="title">
                                            <i class="el-icon-user-solid"></i>
                                            <span>{{item.authName}}</span>

                                        </template>
                                        <el-menu-item-group v-for="(item,key) in item.children" :key="key">
                                            <!-- <router-link :to="item.path" tag="el-menu-item"></router-link> -->
                                            <el-menu-item :index="item.path" >
                                                <i class="el-icon-s-unfold"></i>
                                                {{item.authName}}
                                            </el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                    </el-menu>
                                </el-col>
                            </el-row>
                    </div>
                </div>
                <div class="roms-right">
                    <List></List>
                </div>
            </div>

           
        </section>
        
</template>
<script>
// import List from '@/views/products/list'
import axios from 'axios'
// import storage from '../../model/storage'
import Product from '../services/product-service'
const _product = new Product()
export default {
  name: 'welcome',
        data() {
          return {
            menu:[],  //左边导航菜单
            isCollapse: true,
          }
        },
        // components:{
        //     List,
        // },
        created () {
           let token = storage.get('token')
            // console.log(token)
          _product.detail(token).then((res) => {
            console.log(res)
            this.menu=res.data.data
          })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            quit(){
                // this.$store.state.token=''
                this.$router.push({path:'/'})
            },
            show(){
              this.isCollapse = !this.isCollapse
            }
        }
}
</script>

<style lang="scss" scoped>
// .box{width: 100%;height:100%}
// .boxx{height: 100%;display: flex;background-color: red;width: 100%;}
//@at-root
.roms{height: 918px;display: flex;}

.roms-right{width: 95%;height: 100%;background-color: #EAEDF1;padding-top: 25px;}
//管理头部
.roms-header{justify-content: space-between;background-color: #373D41; width: auto;padding: 0 15px; height: 60px;display: flex;line-height: 60px;color: #fff;align-items: center;}
.roms-header>button{width:70px;height: 40px;background: #909399;border: 0;outline: 0;color: #fff;border-radius: 3px;font-size: 16px;}

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.roms-list{height: 100%;background-color: #373D41;font-size: 16px;}
.roms-box{height: 25px;background-color: #4A5064;  font-size: 16px;color: #fff;text-align: center;}
// .el-menu-item{width: 100%;height: 50px;}
.el-col{height: 50px;}


// .box1{width: 20%;background: red;height: 100%;}
// .box2{width: 80%;background-color: blue;height: 100%;}
</style>