This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 코드 품질 설정

이 프로젝트는 코드 품질과 일관성을 위해 Airbnb ESLint 규칙, Prettier, Husky를 사용합니다.

### 초기 설정

1. **의존성 설치** (아직 설치하지 않았다면):

   ```bash
   pnpm install
   ```

2. **Git 저장소 초기화** (아직 초기화하지 않았다면):

   ```bash
   git init
   ```

3. **Husky 초기화** (`pnpm install` 시 자동으로 실행되지만, 수동으로도 실행 가능):
   ```bash
   pnpm exec husky
   ```

### 설정 테스트

1. **ESLint 테스트**:

   ```bash
   pnpm lint
   ```

   - 코드 스타일 제안에 대한 경고(warning)가 표시되어야 합니다 (오류 아님)
   - 종료 코드는 0이어야 합니다 (성공)

2. **Prettier 포맷팅 테스트**:

   ```bash
   pnpm format:check
   ```

   - "All matched files use Prettier code style!" 메시지가 표시되어야 합니다

3. **Prettier 자동 포맷팅 테스트**:

   ```bash
   pnpm format
   ```

   - Prettier 규칙에 따라 모든 파일을 자동으로 포맷팅합니다

4. **ESLint 자동 수정 테스트**:

   ```bash
   pnpm lint:fix
   ```

   - 자동으로 수정 가능한 ESLint 문제를 자동으로 수정합니다

5. **Husky pre-commit 훅 테스트**:

   ```bash
   # 파일에 작은 변경사항 만들기
   echo "// test" >> app/page.tsx

   # 커밋 시도 (올바른 커밋 메시지 형식 사용)
   git add .
   git commit -m "test: pre-commit hook 테스트"
   ```

   - Husky가 자동으로 `lint-staged`를 실행해야 합니다
   - linting/formatting 문제가 있으면 자동으로 수정됩니다
   - 수정사항이 적용되면 변경사항을 다시 스테이징하고 커밋해야 합니다

6. **커밋 메시지 규칙 테스트**:

   ```bash
   # 잘못된 형식 (실패해야 함)
   git commit -m "잘못된 커밋 메시지"

   # 올바른 형식 (성공해야 함)
   git commit -m "feat: 새로운 기능 추가"
   ```

   - 잘못된 형식의 커밋 메시지는 거부됩니다
   - 올바른 형식의 커밋 메시지만 허용됩니다

7. **브랜치명 규칙 테스트**:

   ```bash
   # 잘못된 브랜치명으로 push 시도 (실패해야 함)
   git checkout -b wrong-branch-name
   git push origin wrong-branch-name

   # 올바른 브랜치명으로 push 시도 (성공해야 함)
   git checkout -b feat/#123-additem-route
   git push origin feat/#123-additem-route
   ```

   - 잘못된 형식의 브랜치명은 push가 거부됩니다
   - 올바른 형식의 브랜치명만 허용됩니다

### 사용 가능한 스크립트

- `pnpm lint` - ESLint를 실행하여 코드 문제를 확인합니다
- `pnpm lint:fix` - ESLint를 실행하고 문제를 자동으로 수정합니다
- `pnpm format` - Prettier로 모든 파일을 포맷팅합니다
- `pnpm format:check` - 파일이 올바르게 포맷팅되었는지 확인합니다
- `pnpm commitlint` - 커밋 메시지 형식을 검증합니다

### 커밋 메시지 규칙

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

**커밋 메시지 형식:**

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Type 종류:**

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없음)
- `refactor`: 코드 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등
- `ci`: CI 설정 파일 수정
- `build`: 빌드 시스템 또는 외부 의존성 변경
- `revert`: 이전 커밋 되돌리기

**예시:**

```bash
feat: 사용자 로그인 기능 추가
fix(auth): 토큰 만료 오류 수정
docs: README 업데이트
refactor: API 호출 로직 개선
```

### 브랜치명 규칙

브랜치명은 다음 형식을 따라야 합니다:

```
<type>/#<issue-number>-<kebab-case-description>
```

허용되는 `<type>`:

- `feat/` - 새로운 기능 개발
- `fix/` - 버그 수정
- `hotfix/` - 긴급 버그 수정
- `chore/` - 빌드/설정 관련 작업
- `docs/` - 문서 작업
- `refactor/` - 코드 리팩토링
- `test/` - 테스트 관련 작업

**예시:**

```bash
feat/#123-additem-route
fix/#210-price-parse-bug
refactor/#98-split-product-components
chore/#5-update-ci
```

브랜치를 push할 때 자동으로 브랜치명이 검증되며, `main`/`master` 브랜치는 예외로 허용됩니다.

### 설정 파일

- `eslint.config.mjs` - Airbnb 스타일 규칙이 포함된 ESLint 설정
- `.prettierrc.json` - Prettier 설정
- `.prettierignore` - Prettier에서 제외할 파일 목록
- `commitlint.config.js` - 커밋 메시지 규칙 설정
- `.husky/pre-commit` - lint-staged를 실행하는 Git pre-commit 훅
- `.husky/commit-msg` - 커밋 메시지 검증 훅
- `.husky/pre-push` - 브랜치명 검증 훅
- `package.json` - lint-staged 설정이 포함되어 있습니다

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
