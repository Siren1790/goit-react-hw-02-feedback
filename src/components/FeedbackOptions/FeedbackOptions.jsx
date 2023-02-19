export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
    <div>
      {options.map((key, index) => (
        <button key={index} type="button" onClick={() => onLeaveFeedback(key)}>
          {toUpperFirst(key)}
        </button>
      ))}
    </div>
  );
};

function toUpperFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
