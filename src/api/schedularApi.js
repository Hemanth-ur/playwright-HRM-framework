export class SchedulerApi {

    constructor(request) {
        this.request = request;
    }

    async runMonthlyJob() {
        return await this.request.post(
            '/scheduler/runMonthlyJob'
        );
    }
}