import { IQuestionType } from "./interfaces";
import { QuestionType } from "./globalTypes";

export const QUESTION_TYPES: IQuestionType[] = [
  { key: QuestionType.TEXT_VIEW, value: "텍스트형",},
  { key: QuestionType.SHORT_ANSWER, value: "단답형",},
  { key: QuestionType.LONG_ANSWER, value: "장문형",},
  { key: QuestionType.NUMERIC_ANSWER, value: "숫자형",},
  { key: QuestionType.BLANK_ANSWER, value: "빈칸형",},
  {
    key: QuestionType.MULTIPLE_CHOICE,
    value: "객관식 질문",
  },
  { key: QuestionType.CHECKBOXES, value: "체크박스",},
  { key: QuestionType.DROP_DOWN, value: "드롭다운",},
  {
    key: QuestionType.FILE_UPLOAD,
    value: "이미지 업로드",
  },
  { key: QuestionType.LINEAR_SCALE, value: "선형 배율",},
  { key: QuestionType.RADIO_GRID, value: "객관식 그리드",},
  {
    key: QuestionType.CHECKBOX_GRID,
    value: "체크박스 그리드",
  },
  { key: QuestionType.DATE_ANSWER, value: "날짜",},
  { key: QuestionType.YEAR_ANSWER, value: "날짜(연도)",},
  { key: QuestionType.TIME_ANSWER, value: "시간",},
  { key: QuestionType.TIMETABLE, value: "시간표",},
  { key: QuestionType.ADDRESS_ANSWER, value: "주소",},
];