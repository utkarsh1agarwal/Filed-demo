import { Action } from '@ngrx/store';


export const POST_GET_FREE_TRIAL_DETAILS = '[GET_FREE_TRIAL_DETAILS] Post';
export const POST_GET_FREE_TRIAL_DETAILS_SUCCESS = '[GET_FREE_TRIAL_DETAILS] Post Success';
export const POST_GET_FREE_TRIAL_DETAILS_ERROR = '[GET_FREE_TRIAL_DETAILS] Post Error'



/**  Post GET_FREE_TRIAL Details  */
export class GetFreeTrialDetailsPost implements Action {
    readonly type = POST_GET_FREE_TRIAL_DETAILS;

    constructor(public payload: any) { }
}

/** Post GET_FREE_TRIAL Details Success */
export class SuccessPostGetFreeTrialDetails implements Action {
    readonly type = POST_GET_FREE_TRIAL_DETAILS_SUCCESS;

    constructor(public payload: any) { }
}

/**  Post GET_FREE_TRIAL Details Error */
export class PostGetFreeTrialDetailsError implements Action {
    readonly type = POST_GET_FREE_TRIAL_DETAILS_ERROR;

    constructor(public payload: any) { }
}


export type GetFreeTrialDetailsActions =
    GetFreeTrialDetailsPost |
    SuccessPostGetFreeTrialDetails |
    PostGetFreeTrialDetailsError ;
