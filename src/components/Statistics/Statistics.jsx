export const Statistics = ({total, positive, state}) => {
  return (
    <div>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {total()}</p>
      <p>
        positive feedback:
        {positive()
          ? positive()
          : '0'}
        %
      </p>
    </div>
  );
};
