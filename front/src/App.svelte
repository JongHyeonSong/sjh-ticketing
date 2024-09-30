<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";

  import { Router, Link, Route } from "svelte-routing";
  import ErrorPage from "./pages/ErrorPage.svelte";
  import Main from "./pages/Main.svelte";
  import Mypage from "./pages/Mypage.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/mypage">About</Link>
  </nav>
  <div>
    <Route path="/" component={Main}></Route>
    <Route path="/mypage" component={Mypage}></Route>
    <Route path="*" component={ErrorPage}></Route>
  </div>
</Router>
