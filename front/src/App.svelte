<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";

  import { Router, Link, Route } from "svelte-routing";
  import ErrorPage from "./pages/ErrorPage.svelte";
  import Main from "./pages/Main.svelte";
  import Mypage from "./pages/Mypage.svelte";
  import Ticketing from "./pages/Ticketing.svelte";

  import http from "./api/index";
  // import http from "@/api/index.js";
  console.log(http);

  const go = () => {
    http.get("http://sjhtest.musicen.com/ping/delay/1").then((res) => {
      console.log(res);
    });
  };

  const go2 = () => {
    http.get("http://sjhtest.musicen.com/ping/delay/5").then((res) => {
      console.log(res);
    });
  };
  import CommonAlert from "./components/DefaultAlert.svelte";
  import { defaultAlert, isLoading } from "./store";
  import { writable } from "svelte/store";

  const open = () => {
    isLoading.update((v) => !v);

    console.log("🚀 ~ fn ~ fn:", defaultAlert);
    // defaultAlert.update((v) => ({ ...v, isOpen: true }));
    defaultAlert.openModal({
      message: "알림 제목zzz",
      buttonTextConfirm: "확인zz",

      onCancel: () => {
        console.log("i am mother!!");
      },
    });
  };
  // $: if ($isLoading) {
  //   console.log("SFSDFSDF");

  //   // alert(`count is dangerously high!`);
  //   // console.log("gogo", isLoading);
  // }

  const isActive = writable(1);

  $: if ($isActive) {
    console.log("WOWO");
  }
  $: {
    console.log("1WOWO");
  }
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/mypage">About</Link>
    <p>{$isLoading}</p>
    <Link to="/ticketing/detail"
      >ticketing/detail - {JSON.stringify($defaultAlert)}</Link
    >
    <button on:click={go}>a - {$isLoading}</button>
    <button on:click={go2}>b - {$isLoading}</button>
    <button on:click={open}>open dia</button>
    <button on:click={(_) => ($isActive = $isActive + 1)}>{$isActive}</button>
  </nav>
  <div>
    <Route path="/" component={Main}></Route>
    <Route path="/mypage" component={Mypage}></Route>
    <Route path="/ticketing/detail" component={Ticketing}></Route>
    <Route path="*" component={ErrorPage}></Route>
  </div>
</Router>
<CommonAlert />
