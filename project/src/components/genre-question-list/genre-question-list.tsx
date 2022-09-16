import { FormEvent } from 'react';
import { useUserAnswers } from '../../hooks/userAnswers';
import { QuestionGenre, UserGenreQuestionAnswer } from '../../types/question';
import GenreQuestionItem from '../genre-question-item/genre-question-item';

type GenreQuestionListProps = {
  question: QuestionGenre;
  onAnswer: (question: QuestionGenre, answers: UserGenreQuestionAnswer) => void;
  renderPlayer: (src: string, playerIndex: number) => JSX.Element;
}

function GenreQuestionList (props: GenreQuestionListProps){
  const {question, onAnswer, renderPlayer} = props;
  const {answers} = question;
  const [userAnswers, handleAnswersChange] = useUserAnswers(question);
  return (
    <form
      className="game__tracks"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onAnswer(question, userAnswers);
      }}
    >
      {answers.map((answer, id) => {
        const keyValue = `${id}-${answer.src}`;
        return(
          <GenreQuestionItem
            answer={answer}
            id={id}
            key={keyValue}
            onChange={handleAnswersChange}
            renderPlayer={renderPlayer}
            userAnswer={userAnswers[id]}
            111
          />
        );
      })}

      <button className="game__submit button" type="submit">Ответить</button>
    </form>
  );
}

export default GenreQuestionList;
