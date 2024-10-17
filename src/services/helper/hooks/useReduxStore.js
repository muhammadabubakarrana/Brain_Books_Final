import {useSelector} from 'react-redux';

export default function () {
  const Language = useSelector(state => state.lang.data);
  const categoryName = useSelector(state => state.category.data);
  const book_subject_id = useSelector(state => state.books.data);
  const chapterName = useSelector(state => state.chapter.data);
  const className = useSelector(state => state.class.data);
  const board_id = useSelector(state => state.board.data);
  const yearName = useSelector(state => state.year.data);
  return {
    Language,
    categoryName,
    book_subject_id,
    chapterName,
    className,
    board_id,
    yearName,
  };
}
