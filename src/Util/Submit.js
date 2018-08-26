import axios from 'axios';
import Dbg from '../Util/Debug';

export default class Submit {
  static submit(data) {
    Dbg.console('submit exec');
    Dbg.console(data);

    axios.post('http://localhost:8000/commit', data).then(response => {
      Dbg.console(response);
    });

    // axios
    //   .get('http://localhost:8000/commit', { params: data })
    //   .then(response => {
    //     Dbg.console(response);
    //   });
  }
}
