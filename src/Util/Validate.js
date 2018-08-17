import Question from '../Question/question.json';
// import Dbg from '../Util/Debug';

export default class Validate {
  static validate(data) {
    let ret = true;

    // validate each data.
    Question.forEach(d => {
      switch (d.Type) {
        case 'SelectOne':
          // you must select one data.
          if (data[d.Question] === null) {
            ret = false;
          }
          break;
        case 'SelectMulti':
          // nothing to do
          break;
        case 'WriteAny':
          // nothing to do
          break;
        default:
          break;
      }
    });

    return ret;
  }
}
