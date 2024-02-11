const GradientButton = ({ buttonText = "Button" }: { buttonText: string }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-bold py-2 px-4 rounded"
    >
      {buttonText}
    </button>
  );
};

export default GradientButton;