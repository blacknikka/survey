// import Dbg from '../Util/Debug';

export default class Validate {
  static validate(data, master) {
    const ret = {
      result: true,
      data: {},
    };

    // validate each data.
    master.forEach(d => {
      ret.data[d.Question] = {
        error: false,
        message: '',
      };

      switch (d.Type) {
        case 'SelectOne':
          // you must select one data.
          if (data[d.Question] === null) {
            const question = ret.data[d.Question];
            question.error = true;
            question.message = 'You must select one.';

            ret.result = false;
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
