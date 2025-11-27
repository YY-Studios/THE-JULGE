import TextLogo from '@/assets/ico-20x-16.svg';

const Page = () => {
  return (
    <>
      <TextLogo />

      <h1 className="text-primary font-h1 max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        To get started, edit the page.tsx file.
      </h1>

      <h1 className="text-h1">안녕하세요 text-h1</h1>

      <h1 className="text-h2">안녕하세요 text-h2</h1>

      <h1 className="text-h3">안녕하세요 text-h3</h1>

      <h1 className="text-body1">안녕하세요 text-body1</h1>

      <h2 className="font-bold">안녕하세요 text-body2</h2>

      <h2 className=" text-primary font-h1">안녕하세요 text-caption</h2>
    </>
  );
};

export default Page;
