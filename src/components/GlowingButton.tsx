interface IGlowingButton {
  text: string;
}

const GlowingButton = ({ text }: IGlowingButton) => {
  return (
    <div className="group relative my-8">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-800 to-blue-600 opacity-75 blur transition duration-200 group-hover:opacity-100 dark:from-green-800 dark:to-green-600"></div>
      <div className="relative divide-x divide-slate-700 rounded-lg bg-black px-7 py-4 leading-none text-white dark:bg-gray-300 dark:text-black">
        {text}
      </div>
    </div>
  );
};

export default GlowingButton;
