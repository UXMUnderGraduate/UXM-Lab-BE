# UXM-Lab-BE
명지대학교 UX Media 연구실 홈페이지 백엔드 서버 개발 레포지토리입니다.

## 실행 방법

### DB와 DB admin 

1. 실행

```shell
# local profile 
sh ./infra/setup.sh
sh ./infra/mysql.sh
```

2. admin page 접속

   http://localhost:8090

### Backend Server

1. 실행
```bash
# local profile
npm install
npm run build
npm run start
```

## 주요 기능

1. 관리자 로그인
   - 관리자는 회원가입 없이 기존에 설정된 id와 password를 통해 로그인 가능합니다. 
2. 공지사항 관리
   - 공지사항 조회(모든 사용자)
   - 공지사항 추가, 삭제, 수정(관리자)
3. 출판물 관리
   - 출판물 조회(모든 사용자)
   - 출판물 추가, 삭제, 수정(관리자)
4. 연구생 정보 관리
   - 연구생 조회(모든 사용자)
   - 연구생 추가, 삭제, 수정(관리자)
5. 갤러리 관리
   - 갤러리 조회(모든 사용자)
   - 갤러리 추가, 삭제, 수정(관리자)

## 문서

### 1. ERD 설계

### 2. API 설계서

### 3. 테스트 케이스
