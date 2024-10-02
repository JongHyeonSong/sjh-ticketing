import Axios from "axios";
import { isLoading } from "../store";
let isRefreshing = false;

const AxiosInst = Axios.create({
  baseURL: import.meta.env.PROD ? "/" : "/back", // baseURL 추가
  timeout: 30 * 1000, // 10초 timeout 설정
  // headers: {
  //   Accept: "application/json",
  // },
  // isGlobalLoading: true,
  // useUserInfo: true,
});

AxiosInst.interceptors.request.use(
  (config) => {
    console.log(isLoading, "g");

    isLoading.set(true);

    return config;
    // const userStore = useUserStore(store);
  },
  (err) => {
    return Promise.reject(err);
  }
);

AxiosInst.interceptors.response.use(
  (res) => {
    isLoading.set(false);

    return res;
  },
  (err) => {
    // isLoading.set(false);

    // if (err.config && err.config.isGlobalLoading) {
    //   // config에 loading 플래그가 걸려있는경우는 로딩을 하나빼준다
    //   // useGlobalStore().popLoading();
    // } else if (err.config && !err.config.isGlobalLoading) {
    //   // config에 loading 플래그가 안 걸려있는경우는 스킵
    // } else {
    //   // 그외 알수없는 에러일시
    //   // useGlobalStore().loadingStack = 0;
    // }

    return Promise.reject(err);
  }
);

export default AxiosInst;
