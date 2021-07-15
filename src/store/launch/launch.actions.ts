import {Session, SessionAction} from "../../common/types/app/types";
import {LOGIN, LOGOUT} from "@/store/launch/session.types";

export function setLogin(payload: Session) {
    const action: SessionAction = {
        type: LOGIN,
        payload,
    }
    return action
}

export function setLogout(payload: Session) {
    const action: SessionAction = {
        type: LOGOUT,
        payload,
    }
    return action
}
