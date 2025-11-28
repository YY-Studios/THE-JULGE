import Button from '@/components/common/button/Button';

const Page = () => {
  return (
    <>
      <Button variant="primary" size="md" as="button">
        버튼
      </Button>
      <Button variant="outline" size="sm" href="/signup" as="link">
        링크
      </Button>
    </>
  );
};

export default Page;
