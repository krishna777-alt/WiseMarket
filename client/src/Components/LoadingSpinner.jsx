const LoadingSpinner = () => {
  return (
    <>
      {/* <div className="absolute inset-3 rounded-full bg-green-500/20 animate-pulse"></div> */}
      <div className="flex items-center justify-center min-h-[120px]">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-green-300/50 blur-sm"></div>
          <div className="absolute inset-0 rounded-full border-4 border-green-600 border-t-transparent animate-spin shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;

const LoadingSpinner2 = () => {
  return (
    <div className="flex items-center justify-center min-h-[120px]">
      <div className="relative h-12 w-12">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-green-200/60"></div>

        {/* Spinning arc */}
        <div className="absolute inset-0 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

// export default LoadingSpinner2;

// const LoadingSpinner = () => {
//   return (
//     <div className="flex items-center justify-center min-h-[120px]">
//       <div className="relative h-14 w-14">
//         <div className="absolute inset-0 rounded-full border-4 border-green-300/50"></div>
//         <div className="absolute inset-0 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
//         <div className="absolute inset-3 rounded-full bg-green-500/20 animate-pulse"></div>
//       </div>
//     </div>
//   );
// };

// export default LoadingSpinner;
