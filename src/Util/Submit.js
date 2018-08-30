import axios from 'axios';
import Dbg from '../Util/Debug';

export default class Submit {
  static submit(data) {
    Dbg.console('submit exec');
    // Dbg.console(data);

    const ret = {
      result: false,
      msg: '',
    };

    axios.post('http://localhost:8000/commit', data).then(response => {
      Dbg.console(response);
      if (response === true) {
        ret.result = true;
      }
      ret.msg = response.msg;
    });

    // axios
    //   .get('http://localhost:8000/commit', { params: data })
    //   .then(response => {
    //     Dbg.console(response);
    //   });

    return ret;
  }
}
