const LoadingCard = () => {
  return (
    <div className="flex flex-col animate-pulse rounded shadow-lg">
      <div className="w-full h-50 bg-gray-300 rounded-t" />
      <div className="p-5 flex-1">
        <div className="w-full h-8 rounded bg-gray-300 mb-4" />
        <div className="w-18 h-5 rounded bg-gray-300" />
        <div className="w-full h-5 rounded bg-gray-300 mt-2" />
        <div className="w-full h-5 rounded bg-gray-300 mt-2" />
      </div>
      <div className="flex items-end justify-between p-5 pt-0">
        <div className="w-18 h-5 rounded bg-gray-300" />
        <div className="flex gap-2">
          <div className="w-12 h-8 rounded bg-gray-300" />
          <div className="w-12 h-8 rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
