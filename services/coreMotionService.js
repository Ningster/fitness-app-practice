import {action, observable} from 'mobx';

class CoreMotionService {
    @observable stepCount = 0;

    @action.bound async startUpdatingStep(stepCount){
        // this.stepCount = stepCount;
        this.stepCount = stepCount;
        console.log(this.stepCount);
    }
}

const coreMotionService = new CoreMotionService();
export default coreMotionService;