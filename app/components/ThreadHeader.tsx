interface Props {
  title: string;
}

export function ThreadHeader({ title }: Props) {
  return (
    <div className="flex w-full justify-center">
      <h2 className="w-full text-3xl text-black border border-lightGrayBorder2 p-6 rounded-b-2xl mt-[-1rem] mx-10 max-w-[1000px]">
        {title}
      </h2>
    </div>
  );
}
