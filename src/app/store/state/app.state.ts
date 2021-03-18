import { FreeTrialFormModel } from '../../model/free-trial-form'

export interface GetFreeTrialAppState {
    readonly getFreeTrialDetails: FreeTrialFormModel[];
    readonly getFreeTrialDetailsError: any;
}