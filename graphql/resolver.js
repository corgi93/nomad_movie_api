/*
    Query를 해결해줌
    Query는 DataBase에게 있어서 문제 같은 거라
    우린 이 Query를 어떤 방식으로 해결(resolver)해줘야 함

    resolve하고 싶은 Query 이름은 name

    즉, 
    scheme.graphql에서 Query를 설명했고 ,
    resolver.js에서 JS로 프로그래밍해서 해결해주었다.

    graphql에서는 views나 URLs같은 건 없고 오직 Query와 resolver만 있다
    이 resolver에서 내가 원하는 대로 
    DB로 보내거나, 다른 메모리로 보내거나 , 다른 api로 보낼 수도 있다.
*/

const resolver = {
  Query: {
    name: () => "nicolas"
  }
};
