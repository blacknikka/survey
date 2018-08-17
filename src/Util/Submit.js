import axios from 'axios';
import Dbg from '../Util/Debug';

export default class Submit {
  static submit(data) {
    Dbg.console('submit exec');

    axios.post('http://localhost:3000/commit', data).then(response => {
      Dbg.console(response);
    });
  }
}
