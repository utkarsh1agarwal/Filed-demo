import * as GetFreeTrialDetailsActions from './../actions/get-free-trial.action';
import { FreeTrialFormModel } from '../../model/free-trial-form';

export type Action = GetFreeTrialDetailsActions.GetFreeTrialDetailsActions;

const initialState: FreeTrialFormModel = {
    budget: null,
    email: null,
    firstName: null,
    lastName: null,
    phone: null
};


export function GetFreeTrialDetailsReducer(state: FreeTrialFormModel[] = [initialState], action: Action) {
    switch (action.type) {
        case GetFreeTrialDetailsActions.POST_GET_FREE_TRIAL_DETAILS:
            return [...state, action.payload];

        case GetFreeTrialDetailsActions.POST_GET_FREE_TRIAL_DETAILS_SUCCESS:
            return [...state, action.payload];

        case GetFreeTrialDetailsActions.POST_GET_FREE_TRIAL_DETAILS_ERROR:
            return [...state, action.payload]

         default:

        return state;
    }
}





