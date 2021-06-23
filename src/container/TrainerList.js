import React from 'react';

const TrainerList = (props) => {
  const { trainers } = props;

  const handleLink = (trainer) => () => {
    props.dispatch(changeCurrentTrainer(trainer));
  };

  if (trainers == null) {
    return (
      <div>
        <h3>Getting Trainers...</h3>
      </div>
    );
  }
  return (
    <div>
      {trainers.map((trainer) => (
        <TrainerInfo
          key={trainer.name}
          trainer={trainer}
          handleClick={handleLink}
        />
      ))}
    </div>
  );
};

export default TrainerList;
