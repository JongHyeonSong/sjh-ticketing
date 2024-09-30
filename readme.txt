spring boot에서 spa 서빙하는3가지

1. 설정으로 NOT_FOUND 에러시 에러페이지 제공(리턴이 200상태코드)
```
public class ViewErrorConfig {

    @Bean
    public CustomErrorPageRegistrar errorPageRegistrar() {
        return new CustomErrorPageRegistrar();
    }

    private static class CustomErrorPageRegistrar implements ErrorPageRegistrar {
        @Override
        public void registerErrorPages(ErrorPageRegistry errorPageRegistry) {
            ErrorPage errorPage = new ErrorPage(HttpStatus.NOT_FOUND, "/");
            errorPageRegistry.addErrorPages(errorPage);
        }
    }
}

```

2. 에러컨트롤러를 적용해서 에러페이지를 커스텀하기(리턴이 200상태코드)
```
@Controller
public class MyErrorController implements ErrorController {
    @GetMapping({ "/", "/error" })
        public String index() {
        return "forward:/index.html";
    }
}

```

3. 라우팅에 "." 이 없는 패턴을 받아서 포워딩하기(/page /page/13 등)
```
@Controller
public class MyErrorController implements ErrorController {
    @GetMapping("/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/index.html";
    }
}
