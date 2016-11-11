import { EventEmitter} from "events";
import axios from 'axios';

class JobStore extends EventEmitter {
  constructor() {
    super();
    let _this = this;
    axios.get('http://localhost:3000/api/jobs').then( function(response) {
      _this.jobs = response.data;
    }).catch( function(error) {
        console.log(error);
    });
  }

  fetch() {
    return this.jobs;
  }
}

const jobStore = new JobStore;

export default jobStore;