<template>
  <div class="container">
    <el-form
      style="max-width: 300px"
      class="demo-ruleForm"
      :model="loginData"
      v-if="isRegister"
      :rules="rules"
    >
      <h3>Register</h3>
      <el-form-item label="username" prop="username">
        <el-input type="text" autocomplete="off" v-model="loginData.username" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input
          type="password"
          autocomplete="off"
          v-model="loginData.password"
        />
      </el-form-item>
      <el-form-item label="rePassword" prop="rePassword">
        <el-input type="password" v-model="loginData.rePassword" />
      </el-form-item>
      <el-form-item
        style="display: flex; justify-content: center; align-items: center"
      >
        <el-button type="primary" @click="RegisterHandler">
          Register
        </el-button>
        <el-button type="default" @click="resetLoginData">Reset</el-button>
      </el-form-item>
      <el-form-item>
        <el-link
          type="info"
          :underline="false"
          @click="
            isRegister = false;
            resetLoginData();
          "
        >
          back →
        </el-link>
      </el-form-item>
    </el-form>
    <el-form
      style="max-width: 300px"
      class="demo-ruleForm"
      :model="loginData"
      v-else
    >
      <h3>login</h3>
      <el-form-item label="username">
        <el-input type="text" autocomplete="off" v-model="loginData.username" />
      </el-form-item>
      <el-form-item label="password">
        <el-input
          type="password"
          autocomplete="off"
          v-model="loginData.password"
        />
      </el-form-item>
      <el-form-item
        style="display: flex; justify-content: center; align-items: center"
      >
        <el-button type="primary" @click="LoginHandler(loginData)">
          Login
        </el-button>
        <el-button type="default" @click="resetLoginData">Reset</el-button>
      </el-form-item>
      <el-form-item class="flex">
        <el-link
          type="info"
          :underline="false"
          @click="
            isRegister = true;
            resetLoginData();
          "
        >
          register →
        </el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { userLoginService } from "@/API/userService";
const router = useRouter();
const isRegister = ref(false);
const loginData = reactive({
  username: "",
  password: "",
  rePassword: "",
});
const resetLoginData = () => {
  loginData.username = "";
  loginData.password = "";
  loginData.rePassword = "";
};
const RegisterHandler = () => {
  // ElMessage.al("submit")
  ElMessage.success("login success");
};
const LoginHandler = async (data) => {
  const res = await userLoginService(data);
  if (res.code === 0) {
    // alert();
    ElMessage.success(res.msg ? res.msg : "login success");
    router.push("/");
  } else {
    alert(res.msg ? res.msg : "login fail");
  }
};
// const LoginHandler = () => {
//   if ("zhangsan" === username && "123456" === password) {
//     ElMessage.success("login Sucess");
//     router.push("/");
//   } else {
//     ElMessage.error("login fail");
//     resetLoginData();
//   }
// };

const checkPassword = (rules, value, callback) => {
  if (value === "") {
    callback(new Error("please input password"));
  } else if (value !== loginData.password) {
    callback(new Error("password is not match"));
  } else {
    callback();
  }
};
const rules = {
  username: [
    { required: true, message: "username is required", trigger: "blur" },
    {
      min: 5,
      max: 16,
      message: "username length must be 5-16",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "password is required", trigger: "blur" },
    {
      min: 5,
      max: 16,
      message: "password length must be 5-16",
      trigger: "blur",
    },
  ],
  rePassword: [{ validator: checkPassword, trigger: "blur" }],
};
</script>

<style scoped>
h3 {
  text-align: center;
  /* outline: #888 2px solid; */
}

.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.container {
  height: 100%;
  /* background-color: #bbb; */
  /* overflow: hidden; */
}

.demo-ruleForm {
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid black;
  padding: 0 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px #888;
}
</style>
