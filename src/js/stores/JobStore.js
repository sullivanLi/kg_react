import { EventEmitter} from "events";
import axios from 'axios';

class JobStore extends EventEmitter {
  constructor() {
    super();
    let _this = this;
    axios.get('http://kerrygrain.ca:9292/api/jobs').then( function(response) {
      _this.jobs = response.data;
      _this.emit("completed");
    }).catch( function(error) {
        console.log(error);
    });
  }

  fetch() {
    return this.jobs;
  }
  fetchById(id) {
    let jobPos = this.jobs.map(function(x) {return x.id; }).indexOf(parseInt(id));
    return this.jobs[jobPos];
  }
}

const jobStore = new JobStore;

export default jobStore;
