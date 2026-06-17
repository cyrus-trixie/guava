export default function RecentWork() {
  return (
    <div className="bg-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Recent Work
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects we've been working on lately.
        </p>
      </div>
      <div className="mt-10 max-w-7xl mx-auto h-screen px-4 py-6 sm:px-6 lg:px-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-gray-200 rounded-lg p-0 flex-col space-y-4 h-full">
    <div style={{backgroundImage: 'url(/images/erp.png)', backgroundSize: 'cover', backgroundPosition: 'center'}} className="rounded-lg h-[80%] w-full" >

    </div>
    <div>
      <h1 className="text-xl font-bold text-black">SuperMarkets</h1>
      <p className="text-black">POS System</p>
    </div>
  </div>
  <div className="bg-gray-600 rounded-lg p-6 flex items-center justify-center h-full">
    dadd
  </div>
  <div className="bg-gray-300 rounded-lg p-6 flex items-center justify-center h-full">
    dadd
  </div>
  <div className="bg-gray-600 rounded-lg p-6 flex items-center justify-center h-full">
    dadd
  </div>
</div>
    </div>
  );
} 