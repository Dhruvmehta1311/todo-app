import iconCheck from "../assets/images/icon-check.svg";

/* eslint-disable react/prop-types */
const Checkbox = ({ isChecked, setIsChecked }) => {
  function toggleCheck() {
    setIsChecked((isChecked) => !isChecked);
  }
  return (
    <div
      onClick={toggleCheck}
      className={`absolute top-3 left-2.5 flex items-center justify-center w-6 h-6 rounded-full cursor-pointer ${
        isChecked
          ? "bg-gradient-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]"
          : "border border-gray-300"
      }  `}
    >
      {isChecked ? (
        <img src={iconCheck} className="w-3 h-3" alt="Check Icon" />
      ) : null}
    </div>
  );
};

export default Checkbox;
