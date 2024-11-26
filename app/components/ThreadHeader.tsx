interface Props {
  title: string;
}

export function ThreadHeader({ title }: Props) {
  return (
    <div className="flex w-full justify-center">
      <h2 className="w-full text-md md:text-3xl text-black border border-lightGrayBorder2 p-3 md:p-6 rounded-b-2xl md:mt-[-1rem] md:border-t border-t-0 mx-10 max-w-[1000px] truncate">
        {title}
      </h2>
    </div>
  );
}
