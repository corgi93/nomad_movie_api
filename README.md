# GraphQL api

### GraphQL이 해결해주는 문제 2가지

1. over-fetching<br>

   - 내가 요청한 영역의 정보 보다 많은 정보를 서버에서 받는 것.
   - 필요한 정보만 받고 싶은데 필요 없는 정보까지 다 받아서 그것들을 안쓴다.
   - 사용자 프로필 , 취미, 수강중인 강의 다 받아온 큰 object에서 사용자 이름만 쓰면 비효율적.
   - graphQL을 이용해 사용자 이름만 요청하여 해결가능!

2. under-fetching

   - 어떤 url 페이지를 요청 시 ex) 인스타그램. 인스타그램의 피드, 알림, 사용자 프로필 모두 받아야 페이지를 로딩할 수 있다.

   - 이렇게 3가지 요청이 3번 오고 가야 앱을 시작해서
     REST API에서는 하나를 완성하려고 많은 소스를 요청한다

   - graphQL은 한 URL (하나의 end-point)에서 모든 것을 받는다! -- URL이 없다!

```
/*
 예로 피드, 알림, 사용자를 들어보면 아래처럼 3개의 url이 나올 것이다.
*/

/feed/comments/likeNumber
/notifications/isRead
/user/name?jin/

/*
 이것을 grqphQL로 요청 정보를 아예 object에 명시해서
graphQL의 back-end에 보낸다.
*/

{
    feed{
        comments
        likeNumber
    }
    notifications{
        isRead
    }
    user{
        username
        porfilePic
    }
}

```

- graphQL에서 요청을 보고 javascript Object를 보내준다.

```

{
    feed : [
        {
            comments: 2,
            likeNumber: 19
        }
    ],
    notifications[
        {
            isRead : true
        },
        {
            isRead : false
        }

    ],
    user[
        {
            username : "paul"
            porfilePic : "http:..."
        },
        {
            username : "niko"
            porfilePic : "http:..."
        }
    ]
}


```

npm start를 해보면 localhost:4000에서
playground가 나오는데 graphql-yoga에서 database를 테스트 해주는 정도로 알 면 된다. (POSTMAN같은)

- 모든 Query든 Mutation이든 서버가 받기 때무에 POST로 보내야 합니다.

필요한 데이터만 요청할 수 있다는 큰 장점!

```
// 나이만 필요하다면
query{
  person{
    age
    gender
  }
}

// return
{
  "data": {
    "person": {
      "age": 27,
    }
  }
}

// 나이,이름 필요하다면
query{
  person{
    name
    age
  }
}

// return
{
  "data": {
    "person": { 
      "name": "hyeokjin"
      "age": 27,
    }
  }
}

```


- Mutation
```
mutation{
	addMovie(name:"iron man2", score:9){
    name,
    score
  }
}

mutation{
  deleteMovie(id:3)
}
```

### 정리
graphQL은 내가 Query에서 data가 어떻게 보일 지 정의하고<br> 
Query(질문)을 resolve(해결)하는 함수를 만드는 것<br>

schema.graphql : 무슨 일이 벌어지는 지 설명하고(비유하자면 URLs 같은?)<br>
resolver.js : 이것을 실행(비유하자면 Views같은?)

 mutation은 arguments를 전달해주고 , body를 parse할 필요도 없고, request를 받을 필요도 없고, parameter를 받을 필요도 없이 db의 데이터를 변경할 수 있다!
 