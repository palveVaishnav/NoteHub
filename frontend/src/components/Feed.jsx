export function Feed({ className }) {
  return (
    <div className={`${className}`}>
      <FeedRepeat />
      <FeedRepeat />
      <FeedRepeat />
      <FeedRepeat />
    </div>
  );
}


function FeedRepeat() {
  return (
    <div className="grid grid-cols-3 grid-flow-row gap-x-2 gap-y-4 h-svh">
      <div className="bg-transparent border-2 border-black row-span-2 rounded-md p-2">
        <FileInfoDisplay />
      </div>
      <div className="bg-transparent border-2 border-black p-2">
        <FileInfoDisplay />
      </div>
      <div className="bg-transparent border-2 border-black p-2">
        <FileInfoDisplay />
      </div>
      <div className="bg-transparent border-2 border-black row-span-2 rounded-md p-2">
        <FileInfoDisplay />
      </div>
      <div className="bg-transparent border-2 border-black p-2">
        <FileInfoDisplay />
      </div>
      <div className="bg-transparent border-2 border-black p-2">
        <FileInfoDisplay />
      </div>
      <div className="bg-transparent border-2 border-black row-span-2 rounded-md p-2">
        <FileInfoDisplay />
      </div>
      <div className="bg-transparent border-2 border-black p-2">
        <FileInfoDisplay />
      </div>
      <div className="bg-transparent border-2 border-black p-2">
        <FileInfoDisplay />
      </div>
    </div>
  )
}

function FileInfoDisplay() {
  const FileName = 'The Notes'
  const LikeCount = 10
  return (
      <div className="relative h-full w-100 border-2 hover:bg-slate-200">
        <div className="absolute top-0 left-0 flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
          </svg>
          {FileName}
        </div>
        <div className="absolute top-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          {LikeCount}
        </div>
        <div className="absolute bottom-0 right-0 flex gap-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </div>
      </div>
  )
}











