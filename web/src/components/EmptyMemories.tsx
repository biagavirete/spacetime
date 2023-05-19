export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="text-center leading-relaxed w-[360px]">
        No memories yet, <a className="underline hover:text-gray-50" href="/memories/new">start now</a>!
      </p>
    </div>
  );
}